module.exports = {
    execute: function (message, args, utils) {
        let quotes = ["It's okay. I'm not $0.", "Allow me to $0 her.", "Hey Niko, do $0.", "I love $0. In fact, I have so much of it that I started this store just to get rid of all of it.", "Pancakes are made of $0.", "...aaaaand there goes the $0.", "Good thing I kept this $0!", "I'm too young to drink $0!", "[My Purpose Is To Guard This $0.]", "I... trust your $0.", "They're called $0 in my world!", "[The TV gives off a dangerous-looking $0.]", "That'll get you... This fine... I'm not sure what this is, actually! Some sort of $0?", "Don't worry! I promise I'll be a good $0!", "[A luminous, yellow $0 stares back at Niko.]", "The computer screen says something about \"updated $0\".", "The $0 is back! And I actually got to see it this time!"];
        message.reply({ content: quotes[Math.floor(Math.random() * quotes.length)].replace($0, args.join(" ")), allowedMentions: { parse: [] }})
    }
}