{ /* NOTE: IN CASE THERE ARE RESET/IMMEDIATELY QUERY ISSUES, USE BUTTON OUTSIDE FORM */ }
{ /* <button
          type="submit"
          id="reset-button"
          onClick={() => {
            dispatch({
              type: types.RESET_STATE,
            });
            // after reseting state, reset endpoint field to empty string. in state, it will be POKEAPI
            // moved button out of form

            // vanilla DOM manipulation was the best way to change the input field value
            const inputField = document.querySelector('#endpoint-field input');
            inputField.value = '';
            // reset textValue field to exampleQuery
            setTextValue(exampleQuery);
            // reset api endpoint to blank string
            setNewAPIEndpoint('');
          }}
        >
Reset
        </button> */ }


// /////

// ! NOTE: USE RUN QUERY DISPATCH HERE TO TEST FOR NESTED QUERIES
// dispatch({
//   type: types.RUN_QUERY,
//   // decontructed using of gql tag to make query object. need to pass in a stringliteral.
//   query: gql([`${textValue}`]),
//   // pulls of key for where data will be in result obj
//   queryResultObject: textValue.match(/(?<=\{\W)(.*?)(?=\@)/g)[0].trim(),
//   newEndpoint: urlToSend,
// });
// // reset local api endpoint
// setNewAPIEndpoint('');
// return;
// ! END OF NESTED TEST

// ! TO DELETE: TEST METHOD TO SEE IF FRONTEND CONNECTS TO SERVER
// const serverCheck = () => {
//   event.preventDefault();

//   // this goes directly to dev server
//   // works with localhost:3030. need to have server SERVE up app
//   fetch('/api')
//     .then(response => response.json())
//     .then((data) => {
//       console.log('response: ', data.msg);
//     })
//     .catch(e => console.log('error in server test: ', e));
// };
