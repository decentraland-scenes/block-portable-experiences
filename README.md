# Block Smart Wearables

Forbid players from claiming a prize if wearing any portable experience.

![](screenshot/screenshot.png)

The scene includes a series of slightly challenging jumps up to the top, and a treasure to claim at the end. This scene checks if a player is wearing a portable experience, such as a jetpack or any other item that might allow the player to have an unfair advantage over others. It also makes sure the player hasn't had a portable experience on at any given time since having stepped into the scene.

To enjoy the scene in full, the player must disable all portable experiences (either by deactivating them or by taking off their corresponding wearables), then step out of the scene and back in.

The scene does the following checks:

- It checks for portable experiences upon loading
- It listens for avatar change events, then checks for portable experiences, in case the player has put on a smart wearable.
- It checks for portable experiences again when the player steps into the scene
