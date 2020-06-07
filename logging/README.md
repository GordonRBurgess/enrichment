# Logging
Logging is the process by which your code produces a running record of what it
is up to.  This can be extraordinarily valuable when it is doing what you want
it to, and endlessly confusing when it isn't.

Different programming languages and environments have varied mechanisms to produce records of what happens during the course of execution.  The tools to do this are referred to generically as 'loggers'; this term is overloaded to near meaninglessness, so make sure you look at a code example before you try to use one in a new language.

Before we get into how to do logging, we should consider what kinds of things we might want  to log.

## critical errors - critical / fatal

What kinds of events might we want to note during the execution of our program?  Most fundamentally, we might need to terminate execution immediately if something goes very very wrong.  Programming languages offer us a way to do this, via a call to something like `exit` (shell scripts), `sys.exit()` (Python), or `process.exit()` (nodeJs).  But just stopping the program isn't useful to the user, and also doesn't help the developer much.  So we could at least write a message out to the console or our log file like `Critical disk failure - Exiting!` before we stop everything and dash out the EXIT.  (Generally also we'll want to return a non-zero numeric exit code)  This kind of event is a **critical** or **fatal** error, and in any non-trivial program we want them logged.

NOTE: Whenever you write a _**critical error handler**_ function, you will probably want to **both** _log your critical error_ **and** _exit your program_.

## non-critical errors - error / warning

It is possible that something really is wrong, but crashing the whole program is
not what we want to do.  (Consider a sales person ordering an item up from the
warehouse that isn't in stock)  In this kind of situation, we want to make sure
that a record is made of the thing that went wrong.

Very often, this is the kind of thing you will detect in a try/catch block (in Python or JavaScript).  (If you are coding for a shell, you will have the sub-program's non-zero return value to check and act on).  When you catch or detect this type of error you will want to log either an **error** or a **warning** - both suggest something that the user of your code should care about - the difference is usually one of severity - when you suppress warning messages you should still see any errors.

## transaction logging

In many settings, especially during development, you will want to create a log entry when some significant thing happens - user is created or disabled, new email address is added, etc.  Note that now we're not making a note that something went wrong, but rather noting that something went right.  (_ideally!_)  While it should also be easy to retrieve this information from your database, this is not always possible:

>Consider a case where I set up a new user, give them superuser access, associate their account with an alternate email address of mine, establish some EFT credentials, do a one-time funds transfer of $1M to my EFT account - _(hey, I'm not **greedy**!)_ - and then delete my account.
While this kind of bad behavior should have other mechanisms in place to catch it, if all of these state-changing events are properly logged in a place I can't get to, then even though I deleted my fake user there will still be a record in the system of what I did.

It is also worth noting that with a sufficiently detailed transaction log one could recreate the state of the database at any point in time.  There are architectures that use logs in this way to run replication or as a backup mechanism, often involving logged _SQL_ statements.  Finally, this kind of logging is also done when your application has to maintain an _audit trail_, which is often the case for applications that support healthcare or financial services.

## informational messages - info / debug / trace

There is an apocryphal story about Daniel Boone that goes that when he was asked if he had ever been lost, he replied, "no, but I've been mighty confused for two or three days".
As you have already been developing software, you know that you often need to know what is _really_ happening when the code you have written is running.  The process of figuring out what your code is really doing - and more to the point making it do what you want it to do - is generically referred to as _debugging_.  There are at least two broad approaches to debugging; one - _**logging**_ - involves writing a record of what is happening out to a file (either on disk or the console).  The other - _**debugging**_ _(proper)_ - invoves running one's code inside a special program called a debugger (or profiler) - more on these later.
This is probably the main reason you have used logging in the code you're already developing, and this is exactly what the console.log() method in JavaScript is for.  The difference between info, debug, and trace events is again one of degree - in systems that support these different logging levels, 'info' messages are for things you want to know, in order to be reassured that things are going as you expect; 'debug' messages are for more detailed information about the state of variables in your code, and 'trace' messages are for just seeing that the program got to a particular line.

In systems that support these messages as separate concepts, you might have an environmental or codespace variable that would set the logging level - often something like:

1. critical / fatal
2. error
3. warning
4. transaction / info
5. debug
6. trace

In this (hypothetical) system, if setting the logging level to `transaction` will cause all transaction and info messages to get logged, as well as warnings, errors, and critical errors.  debug and trace messages will be suppressed, as their level is higher than `transaction`.

## logging in JavaScript

### Native Support

While heavier-duty logging tasks are more typically addressed in the backend, JavaScript does offer some alternatives to console.log().  (see also [this article](https://stackify.com/javascript-logging-basic-tips/))  From that piece:

* Plaintext — `console.log()` outputs unstyled text.
* Info — `console.info()` typically outputs text with a blue background.
* Warn — `console.warn()` typically outputs text with a yellow background.
* Error — `console.error()` typically outputs text with a red background.

### Homemade Tools

As a backend developer, I have grown accustomed to log files that display some basic information that I generally want to know *always* - in particular, it's good to see a timestamp for when the code was executed, even more important to see the context of the code when the logging method is called.  So while there are probably better ways to approach this, I wanted to know what I'd need to do to make this kind of logging available in JavaScript - so I wrote [loggerFactory.js](./src/loggerFactory.js).  There are some things I might want to do to this code to make it more generally useful, but as-is, it accomplishes my two initial goals of logging the time and the code context.

loggerFactory "ToDo":

* Add support for logging levels to provide level-controlled verbosity.
