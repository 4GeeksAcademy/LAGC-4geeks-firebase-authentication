#!/bin/bash

# Make port 5001 (firebase functions) and 9099 (firebase auth) 
# publicly visible for react frontend. Gotta use this hacky loop 
# cause of timing. Ports might not be intially forwarded yet when 
# this script runs
while : ; do
  # Replace 'command_to_generate_input' with the actual command to generate the input text
  output=$(gh codespace ports -c $CODESPACE_NAME)

  echo "$output" | grep -q "5001.preview.app.github.dev"
  first_string_found=$?

  echo "$output" | grep -q "5057.preview.app.github.dev"
  second_string_found=$?

  echo "$output" | grep -q "9099.preview.app.github.dev"
  third_string_found=$?

  if [ $first_string_found -eq 0 ] && [ $second_string_found -eq 0 ] && [ $third_string_found -eq 0 ]; then
    gh codespace ports visibility 5001:public -c $CODESPACE_NAME;
    gh codespace ports visibility 5057:public -c $CODESPACE_NAME;
    gh codespace ports visibility 9099:public -c $CODESPACE_NAME;
    break
  fi

  sleep 1 
done

echo "GET_USERS_ENDPOINT=\"https://$CODESPACE_NAME-5001.preview.app.github.dev/geeks-firebase-72e6d/us-central1/getUsers\"" > ./functions/.env
echo "REACT_APP_FIREBASE_FUNCTIONS_HOST=\"https://$CODESPACE_NAME-5001.preview.app.github.dev\"" > ./react-app/.env;
echo "REACT_APP_FIREBASE_FIRESTORE_HOST=\"https://$CODESPACE_NAME-5057.preview.app.github.dev\"" >> ./react-app/.env;
echo "REACT_APP_FIREBASE_AUTH_HOST=\"https://$CODESPACE_NAME-9099.preview.app.github.dev\"" >> ./react-app/.env;