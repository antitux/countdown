# Countdown Timer

Made from scratch for running timers for things, such as Ads on Twitch.

## VCR Font

No idea where this originally came from. If it ends up having a license, I'll replace it with something else.

## Usage

Deploy to a web server or run locally. It's static html. You could probably very easily turn both of these into a streamelements extension pretty easily.

### Variables

| VAR  |  DEFAULT VALUE |
|---|---|
| message | Ads Running: |
| timer  |  15 (seconds) |

You can also host it locally using a url like this, which will give you a 120 second timer with a message that says PONY:

```file://path/to/countdown/index.html?message=pony&timer=120```

I've provided a manifest.yml to push to CloudFoundry, as that's what I use to host most of my projects. This could easily be dockerized too, but I'm lazy.

Any other questions, feel free to [Shoot Me An Email](mailto:github@antitux.dev)
