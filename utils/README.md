---
sidebar: auto
footer: MIT Licensed | Copyright © 2022 Stevertus
prev: /texts/
next: /modules/
---

# Utils

Util Widgets provide a complete solution that Minecraft does not support that easily out of the box and make your workflow easier and faster.
They are often generating packs, scoreboards and files themselves.

## Timeout

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/OMUokMwfalA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A Timeout is a simple delay in your code. It is done with the Schedule Command and generates a File under the hood.

| constructor |                                               |
| ----------- | --------------------------------------------- |
| String      | the name of the timeout(used as filename)     |
| children    | the content that should be delayed            |
| ticks       | the delay as [Time](/basics/time) object      |
| path        | the folder path(optional, default = "timers") |

**Example:**

```dart
Timeout(
	"timeout1",
	children: [Say("Timeout reached")],
	ticks: 100.ticks
)
⇒ schedule function example:timers/timeout1 100t
// timers/timeout1:
⇒ say Timeout reached
```

## Timer

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/xRPOVAzH7XE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A Timer is very similar to a Timeout, but instead of delaying the code it is run over and over again always delayed by the ticks. In the end it creates a loop with slower tick speed as 20t/s to perform some operations more performant.

| constructor |                                               |
| ----------- | --------------------------------------------- |
| String      | the name of the timeout(used as filename)     |
| children    | the content that should be delayed            |
| ticks       | the delay as [Time](/basics/time) object      |
| infinite    | should it run infinitely? (default = true)    |
| path        | the folder path(optional, default = "timers") |

**Example:**

```dart
Timer(
	"timer1",
	children: [Say("Timer reached")],
	ticks: 2.minutes
)
⇒ function example:timers/timer1
// timers/timer1:
⇒ say Timer reached
⇒ schedule function example:timers/timer1 100t
```

It is recommended to start these timers in your load function.

With a finite timer, you can also stop the timer with `Timer.stop`:

```dart
Timer(
	"timer2",
	infinite:false,
	children: [Say("Timer reached")],
	ticks: 10
)
Timer.stop("timer2")
```

This uses a tag internally to stop scheduling the next timeout if the tag is existing.

## Repeat

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/JvF4r5OZTcw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Repeat Widget repeats a given action multiple times with a tick delay.

| constructor |                                                                         |
| ----------- | ----------------------------------------------------------------------- |
| String      | name of the Repeat                                                      |
| child       | the action to perform(required)                                         |
| to          | times to repeat(required)                                               |
| ticks       | time between repetitions(default = 1 tick)                              |
| path        | where to generate a new repeat file(default = timers)                   |
| counter     | the objective used to hold the current iteration(default = objd_repeat) |

**Example:**

```dart
Repeat("repeat1",
	to:  10,
	child:  Log("test"),
	ticks:  20.ticks
)
⇒ scoreboard players set repeat1 objd_repeat 0
⇒ function mypack:timers/repeat1
```

This would save the current iteration in a fake player repeat1 in objd_repeat and generate a schedule function:

```
# timers/repeat1
tellraw @a [{"text":"Console > ","color":"dark_aqua"},{"text":"test"}]
scoreboard players add repeat1 objd_repeat 1
execute if score repeat1 objd_repeat matches ..10 run schedule function mypack:timers/repeat1  20t
```

This function is executed until the score becomes 11.

## ArmorStand

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/dQvZRGUH4F8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

An armorstand wraps the Summon Widget with special properties for an ArmorStand.

| constructor |                                                        |
| ----------- | ------------------------------------------------------ |
| Location    | the location as type Location(default Location.here()) |
| invisible   | bool                                                   |
| marker      | bool                                                   |
| basePlate   | bool                                                   |
| hasArms     | bool                                                   |
| mainHand    | An Item placed in the main hand                        |
| offHand     | An Item placed in the offhand                          |
| head        | An Item placed in the head slot                        |
| chest       | An Item placed in the chest slot                       |
| legs        | An Item placed in the legs slot                        |
| boots       | An Item placed in the boots slot                       |
| pose        | A Pose describing rotations of all body parts          |
| ...         | all properties from Summon                             |

**Pose**

| Pose |                                        |
| ---- | -------------------------------------- |
| head | List of double values for the rotation |
| body | same...                                |
| lleg | same...                                |
| rleg | same...                                |
| larm | same...                                |
| rarm | same...                                |

On an existing pose, you can also get a new pose from an existing one with `setHead`, `setBody`, `setLegs` and `setArms`

This generates a summon command:

```dart
ArmorStand(
Location.here(),
name:  TextComponent("Test", color:  Color.DarkPurple),
nameVisible:  true,
marker:  true,
mainHand:  Item(Items.clock),
)
⇒ summon armor_stand ~  ~  ~  {"Marker":1,"HandItems":[{"id":"minecraft:clock"},{}],"CustomName":"{\"text\":\"Test\",\"color\":\"dark_purple\"}","CustomNameVisible":1}
```

Often times you need a static armorstand that just acts as a marker for a location, there is ArmorStand.staticMarker that sets properties automatically.

```dart
ArmorStand.staticMarker(Location.glob(),tags:["experimental"])
⇒ summon armor_stand 0  0  0  {"Marker":1,"Invisible":1,"Invulnerable":1,"NoGravity":1,"Tags":["experimental"]}
```

## AreaEffectCloud

An areaeffectcloud can be created with the Summon Widget, but there is also a specific Widget with special properties for an AreaEffectCloud.

| constructor      |                                                        |
| ---------------- | ------------------------------------------------------ |
| Location         | the location as type Location(default Location.here()) |
| name             | a TextComponent respresenting the name of the entity   |
| age              | int                                                    |
| radius           | the radius an effect applies                           |
| applicationDelay | int                                                    |
| tags             | List of tags                                           |
| duration         | int                                                    |
| waitTime         | int                                                    |
| nbt              | additional nbt as Map                                  |

This would create an Areaeffectcloud that only lasts the current tick:

```dart
AreaEffectCloud(
	Location.here(),
	name: TextComponent("myname"),
	waitTime: 10,
)
⇒ summon area_effect_cloud ~  ~  ~  {"WaitTime":10,"CustomName":"{\"text\":\"myname\"}"}
```

To keep the entity alive there is`AreaEffectCloud.persistent` that sets the age to multiple years.

| AreaEffectCloud.persistent |                                                        |
| -------------------------- | ------------------------------------------------------ |
| Location                   | the location as type Location(default Location.here()) |
| name                       | a TextComponent respresenting the name of the entity   |
| radius                     | the radius an effect applies                           |
| applicationDelay           | int                                                    |
| tags                       | List of tags                                           |
| nbt                        | additional nbt as Map                                  |

**Example:**

```dart
AreaEffectCloud.persistent(Location.here(),tags:["new_tag"])
⇒ summon area_effect_cloud ~  ~  ~  {"Duration":-1,"WaitTime":-2147483648,"Tags":["new_tag"],"Age":-2147483648}
```

## Marker

Added in Minecraft 1.17 this entity only exists serversides and thus has no performance constraints for the client. Best used to save locations and even custom nbt data with the data field.

| Marker   |                                                            |
| -------- | ---------------------------------------------------------- |
| Location | the location as type Location(default Location.here())     |
| tags     | List of tags                                               |
| nbt      | additional nbt as Map                                      |
| data     | custom data to store(will just be added to nbt data field) |

**Example:**

```dart
Marker(Location.here(),tags:["new_tag"],data: {'custom': 1})
⇒ summon marker ~  ~  ~  {Tags:["new_tag"],data: {custom: 1}}
```

> Tip: you can also use Entity.Marker() to make it easier to select these markers(generates @e[type=minecraft:marker])

## Interaction

Spawns an interaction entity. Can be used to detect player left/right clicks efficiently. 

| Interaction |                                                        |
| ----------- | ------------------------------------------------------ |
| Location    | the location as type Location(default Location.here()) |
| height      | double denoting the height in blocks (optional)        |
| width       | double denoting the width in blocks (optional)         |
| response    | if true, the player shows animations (optional)        |
| tags        | List of tags                                           |
| nbt         | additional nbt as Map                                  |

**Example:**

```dart
Interaction(Location.here(),height: 2, width: 5)
⇒ summon minecraft:interaction ~  ~  ~  {width: 5.0d, height: 2.0d}
```

In your tick function, you can use `.onInteract()` or `.onAttack` to detect the interaction. 
This uses the execute on command, and removes the interaction nbt data if present:  

```dart
final i = Interaction(Location.here(),height: 2, width: 5)
i.onInteract(select: i.select(limit:1).sort(Sort.nearest), run: [Say('clicked')])
```

*Note*: it might be more efficient to do this with Advancements. 

## Display

Spawns an diplay entity used to display and animate text, items and blocks in the world, having the following common fields.

| Display.[item\| block \| text ] |                                                                                                                                                                       |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| interpolationDuration           | Time denoting the duration for the interpolation  (optional)                                                                                                          |
| startInterpolation              | Time denoting when to start the animation  (optional)                                                                                                                 |
| shadowRadius                    | double size of the shadow (optional)                                                                                                                                  |
| shadowStrength                  | double strength of the shadow (optional)                                                                                                                              |
| viewRange                       | range from which entity is visible (optional)                                                                                                                         |
| billboardType                   | `BillbordType.fixed`(fixed location), `BillbordType.horizontal`(rotates horizontally facing the camera) or `BillbordType.center`(always faces the camera)  (optional) |
| transformation                  | a Transformation object describing the scale, rotation and translation of the display (optional)                                                                      |
| tags                            | List of tags(optional)                                                                                                                                                |
| nbt                             | additional nbt as Map (optional)                                                                                                                                      |



| Display.item |                                                                          |
| ------------ | ------------------------------------------------------------------------ |
| Location     | the location to spawn at                                                 |
| Item         | the item to show                                                         |
| itemDisplay  | type of ItemDisplay to use (eg `ItemDisplay.ground. Itemdisplay.gui...`) |
| ...          | any common properties from above                                         |

| Display.block |                                  |
| ------------- | -------------------------------- |
| Location      | the location to spawn at         |
| Block         | the block to show                |
| ...           | any common properties from above |


| Display.text  |                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| Location      | the location to spawn at                                                                                        |
| TextComponent | the text to show                                                                                                |
| alignment     | a TextAlignment object aligning the text (`TextAlignment.left, TextAlignment.center` or ` TextAlignment.right`) |
| textOpacity   | Alpha value of rendered text. Alpha value is from 0 to 255. (optional)                                          |
| seeThrough    | Whether the text is visible through blocks(optional)                                                            |
| line_width    | Maximum line width used to split lines(optional)                                                                |
| ...           | any common properties from above                                                                                |

### Transformation 
An object describing the scale, rotation and translation of a display entity. 

| constructor    |                                                                                |
| -------------- | ------------------------------------------------------------------------------ |
| right_rotation | Rotation after scaling, tuple with x,y,z components (default 0,0,0)            |
| left_rotation  | Rotation before scaling, tuple with x,y,z components (default 0,0,0)           |
| scale          | scaling(1 being one block), tuple with x,y,z components (default 1,1,1)        |
| translation    | translation, shifting the display  tuple with x,y,z components (default 0,0,0) |

There are also `Transformation.scale, .translate, .rotate` with which you can change one property at a time. 
`Transformation.scaleAll` takes one double and scales uniformly. 
`Transformation.centered` has the same effect as the default constructor, 
but automatically calculates the translation, such that the entity stays centered when scaled. 


### Animations 

To animate a display entity, you can use the static method `Display.animate`. 
Given the entity to animate, duration, start time, and animatable fields, this constructs a data command.

| Display.animate |                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------ |
| Entity          | Display entity to animate                                                                        |
| Time            | duration of the animation                                                                        |
| start           | time to wait until animation starts(default=0t)                                                  |
| shadowRadius    | double size of the shadow (optional)                                                             |
| shadowStrength  | double strength of the shadow (optional)                                                         |
| transformation  | a Transformation object describing the scale, rotation and translation of the display (optional) |
| textOpacity     | Alpha value of rendered text. Alpha value is from 0 to 255. (optional)                           |


You can also use `Display.set` with the same properties to omit the animation duration.

**Example:**
```dart
Display.animate(
	Entity(type: Entities.item_display),
	10.seconds,
	textOpacity: 50,
	transformation: Transformation.centered(
		scale: (2, 2, 2),
	),
),
⇒ data merge entity @e[type=minecraft:item_display] {interpolation_duration:200,start_interpolation:0,textOpacity:50,transformation:{right_rotation:[0.0d,0.0d,0.0d,1.0d],left_rotation:[0.0d,0.0d,0.0d,1.0d],scale:[2.0d,2.0d,2.0d],translation:[-1.0d,-1.0d,-1.0d]}}

```

## Hologram

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/4JsmLMeH3J0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A Hologram shows a floating text at a specific Location using Armorstands. *Note*: from version 1.19.4 use Display entities instead.

| constructor |                                                   |
| ----------- | ------------------------------------------------- |
| String      | the text to display(can also be multiline string) |
| location    | the position(required)                            |
| color       | a Color                                           |
| tags        | additional tags for the armorstands               |
| space       | the space in between the lines(default = 0.25)    |

**Example:**

```dart
Hologram("""
Hello,
World!
""",
	location:  Location.here(),
	color:Color.Aqua,
)
⇒ summon armor_stand ~  ~0.25  ~  {"Marker":1,"Invisible":1,"CustomName":"{\"text\":\"Hello,\",\"color\":\"aqua\"}","Invulnerable":1,"CustomNameVisible":1,"NoGravity":1,"Tags":["objd_hologram"]}

⇒ summon armor_stand ~  ~  ~  {"Marker":1,"Invisible":1,"CustomName":"{\"text\":\"World!\",\"color\":\"aqua\"}","Invulnerable":1,"CustomNameVisible":1,"NoGravity":1,"Tags":["objd_hologram"]}
```

If you wish you can also assign each line a seperate TextComponent with `Hologram.multiple`

| Hologram.multiple      |                         |
| ---------------------- | ----------------------- |
| List of TextComponents | Component for each line |
| ...                    | same as Hologram        |

## RandomScore

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/h8Bni09hVTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The RandomScore Widget assigns a random value to a score using the UUID of an areaeffectcloud.

| constructor    |                                                                    |
| -------------- | ------------------------------------------------------------------ |
| Entity         | the entity to save the result to                                   |
| to             | the max value(required)                                            |
| from           | the minimum value(default = 0)                                     |
| objective      | The scoreboard objective to save the values(default = objd_random) |
| targetFileName | force a specific file                                              |
| targetFilePath | force a specific folder(other than objd)                           |

**Example:**

```dart
RandomScore(
	Entity.Selected(),
	from: 5
	to:  100,
	targetFileName:  "random"
)
⇒ scoreboard players set #max objd_random 96
⇒ function mypack:objd/random
⇒ scoreboard players add @s objd_random 5
```

```
# objd/random1
summon area_effect_cloud ~ ~ ~ {"Tags":["objd_random"]}
execute store result score @s objd_random run data get entity @e[tag=objd_random,sort=nearest,limit=1] UUIDMost 0.0000000001
scoreboard players operation @s objd_random %= #max objd_random
```

## Storage

The Storage Widget gives you easy tools to store and recieve nbt data globally.
A Store takes in a name, by default it already uses the current pack namespace.

| constructor   |                                                                     |
| ------------- | ------------------------------------------------------------------- |
| String        | name                                                                |
| autoNamespace | bool wheater to include the namespace automatically(default = true) |

**Example:**

```dart
var storage = Storage("mystorage",autoNamespace:true)
```

Or you can directly use named constructors to modify data.

### Storage.set

Here you can set one key to a specific value.

| Storage.set |                                        |
| ----------- | -------------------------------------- |
| ...         | same as constructor                    |
| key         | the Nbt key(String)                    |
| value       | a List, Map, String, Number or Boolean |

**Example:**

```dart
Storage.set("mystorage",key: "test",value:5)
⇒ data merge storage example:mystorage {"test":5}
```

### Storage.merge

But of course you can also insert a Map with multiple keys and values.

| Storage.merge |                     |
| ------------- | ------------------- |
| ...           | same as constructor |
| nbt           | the Nbt Data as Map |

### Storage.get

To get a value back, use Storage.get.

| Storage.get |                              |
| ----------- | ---------------------------- |
| ...         | same as constructor          |
| path        | the path of the data(String) |
| scale       | the double scale for numbers |

### Storage.remove

Removes certain Nbt Data.

| Storage.remove |                              |
| -------------- | ---------------------------- |
| ...            | same as constructor          |
| key            | the path of the data(String) |

### Storage.modify

Modifies Nbt Data(look at [Data Widget](/basics#data)).

| Storage.modify |                     |
| -------------- | ------------------- |
| ...            | same as constructor |
| modify         | a DataModify Object |

### Storage.copyData

Copies Nbt Data from a **Data.get** Widget.

| Storage.copyData |                                |
| ---------------- | ------------------------------ |
| ...              | same as constructor            |
| data             | a Data Object to copy from     |
| key              | the path to copy the data into |

### Storage.copyScore

Similar to copyData is copyScore which copies the value of a score into a nbt path.

| Storage.copyScore |                                          |
| ----------------- | ---------------------------------------- |
| ...               | same as constructor                      |
| score             | a Score Object to copy from              |
| key               | the path to copy the data into           |
| scale             | the scale of the new data(optional)      |
| datatype          | the datatype that the number should take |

### Methods

All the constructors also exist as Methods and like the Score you can modify the created Storage through these.

- set
- merge
- get
- remove
- modify
- copyData
- copyScore
- toData (Gives you the corresponding Data Widget)

Check the arguments in your IDE to get more insight into these.

**Example:**

```dart
var storage = Storage("mystorage",autoNamespace:true)

storage.get("key")

storage.copyScore("key",score: Score.fromSelected("score"))

⇒ data get storage example:mystorage key
⇒ execute store result storage mypack:test new byte 1 run scoreboard players get @s test
```

## AroundLocation

Often times you need to check blocks or entities around one Location. AroundLocation utilizes this by using just one build method for all sides:

| constructor |                                                                           |
| ----------- | ------------------------------------------------------------------------- |
| double      | the amount you want to go to each side(required)                          |
| build       | a method requiring one Location argument and returning a Widget(required) |
| top         | bool for +y                                                               |
| bottom      | bool for -y                                                               |
| left        | boo for +x                                                                |
| right       | bool for -x                                                               |
| front       | bool for +z                                                               |
| back        | bool for -z                                                               |

**Example:**

```dart
AroundLocation(
	1,
	build: (Location loc){
		return Setblock(Blocks.stone,location:loc)
	}
)
⇒ setblock ~1 ~ ~ stone
⇒ setblock ~-1 ~ ~ stone
⇒ setblock ~ ~1 ~ stone
⇒ setblock ~ ~-1 ~ stone
⇒ setblock ~ ~ ~1 stone
⇒ setblock ~ ~ ~-1 stone
```

## Raycast

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/30Ig-zNUx8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Raycast Widget is one of the most powerful widgets by giving you many options to configure raytracing in Minecraft.
Internally it uses local coordinates, a distance counter and recursion.

| constructor |                                                           |
| ----------- | --------------------------------------------------------- |
| Entity      | from which entity to go from                              |
| onhit       | a List of Widgets that execute on a hit                   |
| max         | maximum block distance(optional)                          |
| step        | how many steps to go forward each iteration(default = 1)  |
| through     | a Block or Blocktag with passable Blocks(default = air)   |
| ray         | a Function with an interface for each iteration(optional) |
| scoreName   | option to specify counter score(default = objd_count)     |

There are a lot of values to play around, but this here would make a fully functioning raycast function:

```dart
Raycast(
	Entity.All(),
	onhit: [
		SetBlock(Blocks.sandstone,location:Location.here())
	]
)
⇒ execute as @a at @s anchored eyes positioned ^  ^  ^ anchored feet run function mypack:objd/ray1
```

```
# objd/ray1 file
execute unless block ~ ~ ~ minecraft:air run tag @s add objd_ray_hit
execute unless entity @s[tag=objd_ray_hit] positioned ^ ^ ^1 run function mypack:objd/ray1
execute if entity @s[tag=objd_ray_hit] run function mypack:objd/rayhit1
execute if entity @s[tag=objd_ray_hit] run tag @s remove objd_ray_hit

# objd/rayhit1 file
setblock  ~  ~  ~  minecraft:sandstone
```

objD takes the hard work and generates the commands based on your inputs.

### Customization

There is the ray argument to give you more control over the ray.
Here you can execute Widgets for each step and optionally stop or let the ray hit an obstacle.
In Dart this is done with a Function:

```dart
Raycast(
	Entity.All(),
	onhit: [
		SetBlock(Blocks.sandstone,location:Location.here())
	],
	ray: (stop, hit){
		return If(...,then:[stop()]);
		// stop and hit are functions as well
		//that can be executed to perform actions
	}
)
```

Let's also change other inputs:

```dart
Raycast(
	Entity.All(),
	onhit: [
		SetBlock(Blocks.sandstone,location:Location.here())
	],
	ray: (stop, hit) => If(...,then:[stop()]),
	max: 10, // set maximum distance to 10 blocks
	step: 0.1,
	through: Block("#minecraft:transparent"),
)
⇒ scoreboard players set @s objd_count 0
⇒ execute as @a at @s anchored eyes positioned ^ ^ ^ anchored feet run function mypack:objd/ray1
```

```
# objd/ray1 file
# our blocktag:
execute unless block ~ ~ ~ #minecraft:transparent run tag @s add objd_ray_hit
# the result of the ray function:
execute if ... run tag @s add objd_ray_stop
# our distance increases:
scoreboard players add @s objd_count 1
# command changed depending on our inputs:
execute unless entity @s[tag=objd_ray_hit] unless entity @s[tag=objd_ray_stop] if score @s objd_count matches ..100 positioned ^ ^ ^0.1 run function mypack:objd/ray1
execute if entity @s[tag=objd_ray_hit] run function mypack:objd/rayhit1
execute if entity @s[tag=objd_ray_hit] run tag @s remove objd_ray_hit
tag @s remove objd_ray_stop
```

## Do Until/While Loop

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/NbQ9V9N0s_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This Loop repeats a set of widget as long/until a condition is/becomes true.
The Loop uses a Grouped File and Recursion to repeat commands.

| Do.While                       |                                                              |
| ------------------------------ | ------------------------------------------------------------ |
| Condition or conditional value | a condition to test for each iteration                       |
| then                           | a List of Widgets to execute each time                       |
| testBefore                     | test before entering the loop if condition is true(optional) |

> Until just negates the Condition

**Example:**

```dart
Do.Until(Tag("istrue",entity:  Entity.All()),then:[
	Say("repeat")
])
⇒ execute unless entity @a[tag=istrue] run function  mypack:objd/doloop1
```

```
# objd/doloop1 file
say repeat
execute unless entity @a[tag=istrue] run function  mypack:objd/doloop1
```

## ForEach Loop

The ForEach Loop repeats a set of widgets for each value in a Score.
Therefore a file is called recursively and a counter score is increased.

| constructor |                                                                     |
| ----------- | ------------------------------------------------------------------- |
| Score       | the score to iterate through                                        |
| then        | A Function that takes in the count Score                            |
| from        | the initial value for the counter(default = 0)                      |
| counter     | an Entity to hold the count value(default = #objd_foreach)          |
| translate   | a relative Location applied each step                               |
| step        | how much to increase or decrease the counter each time(default = 1) |

**Example:**

```dart
ForEach(
	Score(Entity.All(), "myscore"),
	translate: Location.rel(x:1),
	then: (score) {
		return  Log(score);
	}
)
⇒ scoreboard players set #objd_foreach objd_count 0
⇒ execute if score #objd_foreach objd_count < @a myscore run function mypack:objd/foreach2
```

```
# objd/foreach2 file
tellraw  @a  [{"text":"Console > ","color":"dark_aqua"},{"score":{"name":"#objd_foreach","objective":"objd_count"}}]
scoreboard players add #objd_foreach objd_count 1
execute if score #objd_foreach objd_count <= @a myscore positioned ~1 ~ ~ run function  mypack:objd/foreach2
```

## Builder

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/v0v0xbSg2yQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Builder Widget embedds a builder function in your Widget Tree. Here you can provide a similar method to the generate method of a Widget. This allows you to define new variables, make calculations and conditions.

| constructor     |                                                            |
| --------------- | ---------------------------------------------------------- |
| BuilderFunction | a Function that takes in the context and returns a Widget. |

**Example:**

```dart
Builder(
	(Context context){
		var var1 = 1
		if(true) return Widget()
		return Widget()
	}
)
```

## ItemBuilder

The ItemBuilder provides an interface to convert a List into Widgets using a Builder.
Each Item maps to a new Widget that you return in the build Function.

| constructor\<T\> |                                                                    |
| ---------------- | ------------------------------------------------------------------ |
| items            | the List of Type T                                                 |
| build            | the build function, takes in one item(type T) and returns a Widget |

**Example:**

```dart
List<String> list = ["hello","world"]
ItemBuilder<String>(
	items: list,
	build: (String item) => Log(item),
)
==> For.of([Log("hello"),Log("world")])
```

## PassTrait

The PassTrait Functionality allows you to pass data down your widget tree without struggles. Imagine having one unique value in your pack that special widgets below it regarless of their position or parent should know of.
The PassTrait Widget injects your value in the Context, allowing you to access it everywhere.

| constructor |                                          |
| ----------- | ---------------------------------------- |
| any         | a value that you would like to pass down |
| child       | The underlying widget tree(required)     |

```dart
PassTrait(
	10.0,
	child: ...
)
```

In some other Widgets generate function you can retrieve the value by using PassTrait.of now. The values are passed by type, so you can just get one value per type(of course custom classes are also valid):

```dart
  @override
  Widget generate(Context context) {
    var value = PassTrait.of<double>(context); // => 10.0
    return ...;
  }
```

## StraitWidget

<iframe width="560" height="315" style="margin: 0 calc(50% - 280px)" src="https://www.youtube-nocookie.com/embed/HD50K0DkEuI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A StraitWidget allows you to build up a List of Widgets inside of a Widget. Like the Builder, you have to provide a Function, which takes in a List and then you can add on to this list.

| constructor |                                                                |
| ----------- | -------------------------------------------------------------- |
| Function    | the strait function that gives you a List of Widgets to modify |

**Example:**

```dart
StraitWidget(
	(List<Widget> widgets){
		widgets.add(Command(...))
		...
	}
)
```

### Queables

StraitWidget supports the RestAction and Entity Queables.
Read more about Queables [here](/basic#queables)

### Return Value

It is also possible to return something(Widget, Queable, RestAction, List):

```dart
StraitWidget(
	(List<Widget> widgets){
		return Entity.Self().kill()
	}
)
==> kill @s
```

## VersionCheck

Checks whether the player updated or downdated your datapack.

| constructor |                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------- |
| int         | the datapacks current version                                                               |
| onDowndate  | a List of Widgets that are executed if it detects that you have downgraded                  |
| onUpdate    | a List of Widgets that are executed if it detects that you have upgraded                    |
| then        | a Function that takes in the used Score and reacts respectivly returning a Widget(optional) |
| score       | change the scores name(optional)                                                            |

**Example:**

```dart
VersionCheck(
	2,
	onDowndate: [Log('Notice: You installed an older version')],
	onUpdate: [Log('Thank your for updating the pack!')],
)
```

## ServerVersionCheck

Checks the used Minecraft Version and can give feedback on it(e.g. Errors).

| constructor   |                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------- |
| minVersion    | the aimed version number as int(1.15 = `15`)                                                |
| versionTooLow | a List of Widgets that are executed if it detects that the version is lower that minVersion |
| then          | a Function that takes in the used Score and reacts respectivly returning a Widget(optional) |
| serverVersion | change the scores name(optional)                                                            |

**Example:**

```dart
ServerVersionCheck(
	minVersion: 14,
	versionTooLow: [Log('Please use at least Minecraft Version 1.14')],
	then: (Score s) => ...
)
```

This methods summons an entity and puts some exclusive items in their inventory to detect the version.

## PlayerJoin

Allows you to specify what should happen if a player joins. This can be triggered every time or just once with PlayerJoin.inital or when rejoining with PlayerJojn.rejoin.

| constructor |                                                              |
| ----------- | ------------------------------------------------------------ |
| then        | A Widget that gets executed by the player that joins         |
| target      | The targeted player that will throw this event(default = @a) |
| score       | The scoreboard that is used(default = `objd_join`)           |

This will create a [score] that counts leave_game stats and checks if the player has the [score] thus detecting when a player joins.

**Example:**

```dart
PlayerJoin(
	then: Log('Jesus returned!')
)
=> execute as @a[scores={objd_join=1..}] run tellraw @a [{"text":"Console > ","color":"dark_aqua"},{"text":"Jesus returned!"}]
=> execute as @a[scores={objd_join=1..}] run scoreboard players set @s objd_join 0
```

| PlayerJoin.inital |                                                                          |
| ----------------- | ------------------------------------------------------------------------ |
| then              | A Function accepting a Score that gets executed by the player that joins |
| target            | The targeted player that will throw this event(default = @a)             |
| score             | The scoreboard that is used(default = `objd_join`)                       |

This gives every player a unique id on join and enables you to do something the first time around with the [score] holding the players id.

**Example:**

```dart
PlayerJoin.initial(
	then: (score) => Log(score)
)

=> scoreboard players add #current objd_join 1
=> tellraw @a [{"text":"Console > ","color":"dark_aqua"},{"score":{"name":"#current","objective":"objd_join"}}]
=> scoreboard players operation @s objd_join = #current objd_join
```

| PlayerJoin.rejoin |                                                              |
| ----------------- | ------------------------------------------------------------ |
| then              | A Widget that gets executed by the player that joins         |
| target            | The targeted player that will throw this event(default = @a) |
| score             | The scoreboard that is used(default = `objd_join`)           |

This will create a [score] that counts leave_game stats and thus detects if a player rejoins.

## Recipe

A Widget used to generate minecrafts json recipes as well as objDs custom recipes. A basic recipe takes in ingredient Items with the slot and a result Item.

| Recipe         |                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------- |
| Map<slot,Item> | The ingredients as a Map with the Slot(1 to 9) on the one side and your Item on the other |
| Item           | your result Item                                                                          |
| name           | name of your recipe file(default = recipe)                                                |
| id             | overrides the automatically generated id(optional)                                        |
| exactlyPlaced  | bool that requires to leave all unused slots empty(default = false)                       |
| exactResult    | a number that limits the result count(optional)                                           |

**Example:**

```dart
Recipe(
    {
        1: Item(Blocks.oak_planks),
    	2: Item(Blocks.oak_planks),
        4: Item(Blocks.oak_planks),
        5: Item(Blocks.oak_planks),
    },
    Item(Blocks.crafting_table,Count:2,nbt:{'MyNBT':1})
 )
```

### Recipe.pattern

Want to stay close to the original minecraft notation and want to prove a pattern? You can also do that with:

| Recipe.pattern    |                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| List\<String>     | Each String of Length 3 represents one row in the crafting grid, use the same char for same items |
| Map\<String,Item> | For each used character in the pattern, define a corresponding item                               |
| ...               | stays the same                                                                                    |

**Example:**

```dart
Recipe(
	[
		'##',
		'##'
	],
	{'#': Item(Blocks.oak_planks)},
    Item(Blocks.crafting_table,Count:2,nbt:{'MyNBT':1})
 )
```

The API also supports shapeless crafting. That means you can set the ingredients in any shape and it would be the same result.

| Recipe.shapeless |                                             |
| ---------------- | ------------------------------------------- |
| List\<Item>      | The ingredients in any shape(without slots) |
| ...              | stays the same                              |

**Example:**

```dart
Recipe.shapeless(
    [
       Item(Blocks.oak_planks),
       Item(Items.diamond)
    ],
    Item(Items.diamond_sword)
 )
```

### Recipe.smelting

Since smelting requires just one ingredient, just give it an Item and its result. Futhermore you can change the cooktime and experience gained:

| Recipe.smelting |                                                                               |
| --------------- | ----------------------------------------------------------------------------- |
| Item            | The ingredient (without slot)                                                 |
| cooktime        | The cook time of the recipe in ticks(default = 200)                           |
| experience      | output experience as double(default = 0.1)                                    |
| type            | Can be changed to RecipeType.blasting, smoking or campfire_cooking (optional) |
| ...             | stays the same                                                                |

### Recipe.smithing

For smithing you can define an additional item on top to the base item:

| Recipe.smithing |                 |
| --------------- | --------------- |
| Item            | The ingredient  |
| Item            | result Item     |
| addition        | additional Item |
| ...             | stays the same  |

In case you need to, you can also serialize a recipe to and from json(represented as Map):

```dart
Recipe.fromJson(r.toJson());
```

## InitScore

Initializes a Score to value if not set previously .

| constructor |                              |
| ----------- | ---------------------------- |
| Score       | the mandatory Score          |
| value       | the aimed value(default = 1) |
|             |

**Example:** (preferably used in a load function)

```dart
InitScore(
	Score(Entity.Self(), 'myscore'),
	value: 10,
)
```
