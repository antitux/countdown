# Countdown Timer

Made from scratch for running timers for things, such as Ads on Twitch.

## VCR Font

No idea where this originally came from. If it ends up having a license, I'll replace it with something else.

## Usage

Deploy to a web server or run locally. It's static html. You could probably very easily turn both of these into a streamelements extension pretty easily.
Also built it as a Docker container for local hosting. You can get that [here](https://hub.docker.com/r/antitux/countdown).


### Variables

| VAR  |  DEFAULT VALUE | Description |
|---|---|---|
| message | Ads Running: | Default message |
| timer  |  15 (seconds) | Timer (in seconds |
| cursor | (none) | Blinking Cursor |
| speed | 500 | Blinking Cursor Speed |

You can also just add the file locally using a url like this as an OBS Browser Source, which will give you a 120 second timer with a message that says PONY with a blinking `:` every half second

```file://path/to/countdown/index.html?message=pony&timer=120&cursor=:&speed=500```

Any other questions, feel free to [Shoot Me An Email](mailto:github@antitux.dev)
