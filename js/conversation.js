function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

var $btnDemarrer = $('#btnDemarrer');
var _$results = $('#results');
var test = document.getElementById('results').textContent;

var zone_A = entierAleatoire(1, 100);
var zone_b = entierAleatoire(101, 199);
var zone_C = entierAleatoire(200, 210);


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
                next: 1000
            },
            {
                text: "<strong>This is</strong>, Yellow.*",
                next: 206
            },
            {
                text: "<strong>This is</strong>, Red.",
                next: 1000
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
            text:"These are <strong>birds.*</strong>",
            next: 207
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
                text: "the cloud is <strong>rainy*</strong>",
                next: 208
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
              text: "Yes,<strong> very much.*</strong>",
              next:209
          }
      ]

    },
    209: {
      text:'Q:5/10 : What is your new teacher like, Carla?',
      options: [
          {
              text: "She <strong> teaches us English and music.*</strong>",
              next: 210
          },
          {
              text: "She <strong> likes playing table tennis.</strong>",
              next: 110
          },
          {
              text: "She is <strong> very much.</strong>",
              next: 110
          }
      ]

    },
    210: {
      text:'Q:6/10 : I love this photo of your family, David!',
      options: [
          {
              text: "Yes <strong> please! </strong>",
              next: 111
          },
          {
              text: "If you <strong> like!</strong>",
              next: 111
          },
          {
              text: "So <strong>do I!*</strong>",
              next: 211
          }
      ]


    },
    211: {

        text:'Q:7/10 : Comment, dit-on le mot "Chanter" en anglais ?',
        options:[
          {
              text: "<strong> sing *</strong>",
              next: 212
          },
          {
              text: "<strong> song </strong>",
              next: 121
          }

        ]
      },

    212: {
        text: 'Q:8/10 : Late',
        options:[
          {
              text: "<strong> Try not to be </strong>",
              next: 212
          },
          {
              text: "<strong> Try to not be *</strong>",
              next: 213
          }

        ]
      },
      213: {
          text: 'Q:9/10 : How many CDs',
          options:[
            {
                text: "<strong> Have you got*</strong>",
                next: 214
            },
            {
                text: "<strong> You have </strong>",
                next: 114
            },
            {
              text: "<strong> are you having </strong>",
              next: 114
            }

          ]
        },
        214: {
            text: 'Q:10/10 : The teacher told me',
            options:[
              {
                  text: "<strong> to not worry </strong>",
                  next: 216
              },
              {
                  text: "<strong> not to worry*</strong>",
                  next: 217
              },
              {
                text: "<strong> i not worry </strong>",
                next: 216
              }

            ]
          },
      217: {
        text :'🎉 Felicitation ! Vous avez le niveau B1',
        options:[
          {
            text:"Contactez-nous",
            next: 1000
          },
          {
            text: "Demande de devis",
            next: 1001
          },
          {
            text: "Essaie gratuit",
            next: 1002
          }
        ]
      },
      1000:{
        text:'☎️ 09.52.41.68.80'
      },
      1001:{
        text:'Rendez-vous sur le lien https://livelondon.fr/cours-anglais-adultes-visioconference'
      },
      1002:{
        text:"https://livelondon.fr/essai-gratuit"
      },

};
