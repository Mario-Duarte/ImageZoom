# ![Logo-ImageZooom](https://github.com/Mario-Duarte/react-ImageZoom/blob/demo/public/logo28.png?raw=true) ImageZooom - React Component

Simple React component that will allow users to zoom in on your images, perfect for product images and galleries!

View it in action [on this demo page!](https://mario-duarte.github.io/react-ImageZooom/)

## Why?

As a long user of jQuery I have developed many plugins over the years that have helped me developing solutions faster and more reliably. As I move and transition to React(♥) I wanted some of these to come along with me on this new journey.

I like my plugins(now components) to be as flexible as possible and to not get in the way of the styling of the app/site that is been implemented to and this is no different.

Want to come along on this journey and/or have some great ideas on how to improve this component? [Check out the repo here!](https://github.com/Mario-Duarte/react-ImageZooom)

## How it works?

This component has a very minimal styling footprint only setting the minimum to make it work, in addition you can pass in your own `className` and `id` props enabling you to adapt the design to your needs.

For extra customization of the style of this component it will also add some extra classes dynamically depending on its state.

It will have the class `loading` while the image is been preloaded and `loaded` once it has been loaded.

Additionally it will have the class `fullview` while the user has not initiated the zoom and `zoomed` once the user has taped/clicked in.

## How to install

To install this on your project run the following command on your terminal:<br/>
`npm install react-imagezooom`

## How to Use

Here is a basic example of how to import and use this component:

```(javascript)
import React from "react"
import ImageZoom from "react-imagezooom";

function myZoomableImg() {
  return (
    <div>
      <ImageZoom src="https://picsum.photos/seed/000/1920/1080" alt="A image to apply the ImageZoom plugin" zoom="200"/>
    </div>
  );
}

export default myZoomableImg;

```

This component accepts the following attributes:

| Prop      |        Default value         | required |
| --------- | :--------------------------: | -------: |
| className |             Null             |    false |
| id        |             Null             |    false |
| src       |             Null             |     true |
| zoom      |             200              |    false |
| alt       | "This is an imageZoom image" |    false |
| width     |            "100%"            |    false |
| height    |            "auto"            |    false |

As you can see above, it is very similar to the standard `<img />` tag, now let's look at a more advanced example of a gallery using the component.

```(javascript)
import React from "react"
import ImageZoom from "react-imagezooom";

function myZoomableImg() {
  return (
    <ul className="myGallery">
        <li><ImageZoom className="myGalleryImg" src="https://picsum.photos/seed/001/1920/1080" alt="My gallery image 1" zoom="300"/></li>
        <li><ImageZoom className="myGalleryImg" src="https://picsum.photos/seed/002/1920/1080" alt="My gallery image 2" zoom="200"/></li>
        <li><ImageZoom className="myGalleryImg" src="https://picsum.photos/seed/003/1920/1080" alt="My gallery image 3" zoom="200"/></li>
        <li><ImageZoom className="myGalleryImg" src="https://picsum.photos/seed/004/1920/1080" alt="My gallery image 4" zoom="300"/></li>
    </ul>
  );
}

export default myZoomableImg;
```

Note that you can also set different Zoom levels per image.<br/>
For more examples [see this demo page!](https://mario-duarte.github.io/react-ImageZooom/)

## Bugs and issues

Please report all bugs and issues [here](https://github.com/Mario-Duarte/react-ImageZoom/issues).
