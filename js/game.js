// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Smusic1.mp3",
    background_image: "bed.jpg",
    levels: {

        start: {
            message: "You have awoken on your childhood bed. Noise has come from your closet.",
            choices: [
                {
                    text: "Walk to the closet.",
                    nextLevel: "Closet",
                },

                {
                    text: "Walk outside into the hallway.",
                    nextLevel: "Hallway"
                },
            ]
        },

        Closet: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a door that says 'Door to Fillory' behind a rack of clothes.",
            choices: [
                {
                    text: "Open the door.",
                    nextLevel: "closetpathf", 
                },
            ]
        },

        closetpathf: {
            message: "The magical land of fillory has appeared before you",
            choices: [
                {
                    text: "Continue to Fillory",
                    nextLevel: "deathCloset",
                },
                {
                    text: "Walk outside into the hallway.",
                    nextLevel: "Hallway"
                },
            ]
        },
        deathCloset: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You have fallen into your death. Gottem.",
            choices: [
                {
                    text: "Wake Up?",
                    nextLevel: "start", 
                },
            ]
        },
    
        Hallway: {
            background_image: "fire.gif",
            music: "Smusic1.mp3",
            message: "It is pitch dark but you see a light flickering in the hallway.",
            choices: [
                {
                    text: "Walk toward the light like everyone else.",
                    nextLevel: "HallwayLight", 
                },
            ]
        },  
         HallwayLight: {
            background_image: "fire.gif",
            music: "Smusic1.mp3",
            message: "Two doors, one on your left and one on your right. Which is your path?",
            choices: [
                {
                    text: "Door on the left",
                    nextLevel: "Leftdoor", 
                },
                {   
                    text: "Door on the right",
                    nextLevel: "Rightdoor",
                },
            ]
        },  
        Leftdoor: {
            background_image: "fire.gif",
            music: "Smusic1.mp3",
            message: "You walk in, you see a adrelinanine shot.",
            choices: [
                {
                    text: "Pick up the shot and head back to the hallway.",
                    nextLevel: "shotback2hallway", 
                },
            ]
        },  
        shotback2hallway: {
            background_image: "fire.gif",
            music: "Smusic1.mp3",
            message: "Right before you step out, you hear footsteps. What do you do?",
            choices: [
                {
                    text: "Hide in the closet",
                    nextLevel: "hidingincloset", 
                },
            ]
        },  
         hidingincloset: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You hear someone step in. But you feel hot air on your head.",
            choices: [
                {
                    text: "You look up?",
                    nextLevel: "LookedUp", 
                },
            ]
        },  
         LookedUp: {
            background_image: "clown.jpg",
            music: "scream.mp3",
            message: "Lol you dead.",
            choices: [
                {
                    text: "Wake Up?",
                    nextLevel: "start", 
                },
            ]
        },  
        Rightdoor: {
            background_image: "fire.gif",
            music: "Smusic1.mp3",
            message: "You walk in, you see a flashlight.",
            choices: [
                {
                    text: "Pick up the flashlight and head back to the hallway.",
                    nextLevel: "back2hallway", 
                },
            ]
        },
        back2hallway: {
            background_image: "boogey.jpg",
            music: "whyrun.mp3",
            message: "You head out the hallway but my mans start chasing you.",
            choices: [
                {
                    text: "Let him smoke you.",
                    nextLevel: "LookedUp", 
                },
                 {
                    text: "Swing back",
                    nextLevel: "Weave"       , 
                },
            ]
        },
        Weave: {
            background_image: "boogey.jpg",
            music: "weave.mp3",
            message: "Hannnn",
            choices: [
                {
                    text: "Bout it",
                    nextLevel: "start", 
                },
                 {
                    text: "",
                    nextLevel: ""       , 
                },
            ]
        },
    }
};
