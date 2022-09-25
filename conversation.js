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
        text: 'Chat with our Doggo_bot',
        options: [
            {
                text: '🐶 click here to START',
                next: 2
            }
        ]
    },
    2: {
        text: 'How can we help You',
        
   
        text: 'Choose an option below',
        options: [
            {
                text: "Engineering Streams",
                next:6
                
                
            },
            {
                text: "Ask an Expert",
                next: 5
            },
            {
                text:"close",
                next:0
            }
        ]
    },
    0: {
        text: 'Thanks for visiting us. Good Luck for Your Career! To chat again click on restart',
    },
   
    
    5: {
        text: 'You can reach us at',
        options: [
            {
                text: "Linkedin",
                url: "https://www.linkedin.com/in/mehul-jain-a5b135224"
                
            },
            {
                text:"Facebook",
                
                
                url:"https://www.facebook.com/profile.php?id=100062199425495"
            },
            {
                text:"Instagram",
                url:"https://www.instagram.com/deadly912ag/"
                
            }
        ]
    },
    6:{
        text:"Engineering Streams",
        options:[
            {text:"Computer science",next:2},
            {text:"Civil ",next:2},
            {text:"Electrical",next:2},
            {text:"Data science",next:2},
            {text:"Bio Eng.",next:2},
            {text:"chemical" ,
            next:2 
        }
           
        ],
      
        
        
    },
    
};