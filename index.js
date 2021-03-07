const { Plugin } = require('@vizality/entities');
module.exports = class stallmanCopypasta extends Plugin {
    start() {
        vizality.api.commands.registerCommand({
            command: 'stallman',
            description: 'Prints the stallman copypasta to current channel.',
            usage: '{c} [-s] <Replacement for Linux>',
            executor: async (message) => {
                let default_word = "Linux";
                let send = false;
                if (message[0] == "-s") {
                    message.shift();
                    send = true;
                    if (message[0] != undefined) default_word = message.join(' ');
                } else {
                    if (message[0] != undefined) default_word = message.join(' ');
                }

                let copypasta = `I'd just like to interject for a moment. What you're refering to as ${default_word}, is in fact, GNU/${default_word}, or as I've recently taken to calling it, GNU plus ${default_word}. ${default_word} is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.\n
Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called ${default_word}, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.\n
There really is a ${default_word}, and these people are using it, but it is just a part of the system they use. ${default_word} is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. ${default_word} is normally used in combination with the GNU operating system: the whole system is basically GNU with ${default_word} added, or GNU/${default_word}. All the so-called ${default_word} distributions are really distributions of GNU/${default_word}\!`;
                return {
                    send,
                    result: copypasta
                };
            }
        });
    }
    stop() {
        vizality.api.commands.unregisterCommand('stallman');
    }
};