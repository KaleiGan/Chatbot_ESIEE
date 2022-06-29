/* The chat const defines the Peekobot conversation.
 *
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 *
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 *
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 *
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */
const chat = {
    1: {
        text: 'Bonjour! Bienvenue to LiveLondonBot.',
        options: [
            {
                text: '👋',
                next: 2
            }
        ]
    },

    2: {
        text: 'Welcome to LiveLondonBot my name is <em>LondBot</em>, are you ready to test your english ? <del>êtes vous prêt pour tester votre anglais</del>',
        next: 204
    },
    /* u */

    204: {
        text: 'Q:1/10 : 🍌 Pour toutes les questions choississez une réponse <em> What color is the banana? </em>. ',
        options: [
            {
                text: "<strong>This is</strong>, Blue.",
                next: 205
            },
            {
                text: "<strong>This is</strong>, Yellow.",
                next: 104
            },
            {
                text: "<strong>This is</strong>, Red.",
                next: 205
            }
        ]
    },

    205: {

        text: 'Faux. En anglais la couleur jaune se dis Yellow. Prochaine question !',
        next: 206
    },
    206: {
        text: 'Q:2/10 : 🐦 What is ?',
        options :[
          {
            text:"These are <strong>bees.</strong>",
            next: 207
          },
          {
            text:"These are <strong>bears.</strong>",
            next: 207
          },
          {
            text:"These are <strong>birds.</strong>",
            next: 107
          }

        ]
    },
    207: {
        text: 'Q:3/10 : 🌧️ The cloud is with :',
        options: [
            {
                text: "the cloud is <strong>sunny</strong>",
                next: 208
            },
            {
                text: "the cloud is <strong>rainy</strong>",
                next: 108
            },
            {
                text: "the cloud is <strong> windy</strong>",
                next: 208
            }
        ]
    },
    208: {
      text:'Q:4/10 : What is the nice answer ? <em>Did you enjoy the party, Clare?</em>',
      options: [
          {
              text: "Yes,<strong> me too.</strong>",
              next: 209
          },
          {
              text: "Yes,<strong> you did.</strong>",
              next: 209
          },
          {
              text: "Yes,<strong> very much.</strong>",
              next: 109
          }
      ]

    },
    209: {
      text:'Q:5/10 : What is your new teacher like, Carla?',
      options: [
          {
              text: "She <strong> teaches us English and music.</strong>",
              next: 110
          },
          {
              text: "She <strong> likes playing table tennis.</strong>",
              next: 210
          },
          {
              text: "She is <strong> very much.</strong>",
              next: 210
          }
      ]

    },
    210: {
      text:'Q:6/10 : I love this photo of your family, David!',
      options: [
          {
              text: "Yes <strong> please! </strong>",
              next: 211
          },
          {
              text: "If you <strong> like!</strong>",
              next: 211
          },
          {
              text: "So <strong>do I!</strong>",
              next: 111
          }
      ]

    },

};
