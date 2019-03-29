# CloudMaker

CloudMaker's an easy-to-use tool for creating a realistic rolling smoke effect without video.

I needed a lightweight smoke effect for a website. Rather than setting actual fire to things, I tried layering semi-transparent images of clouds over each other, positioning and rotating them variously. And -- oh, splendid! -- it worked.

However, tweaking the settings was awfully cumbersome. Did I need thickly roiling smoke? Softly shifting mist? Or something in between? I wanted to be able to easily adjust and compare the various configurations to more easily choose between effects. A visual dashboard would be better, I thought. So I built one.

# Coming Soon:
  - Save and export configurations for later use
  - Add custom background colors
  - Mute all but the current layer while editing
  - Add and remove layers

### Tech

I built CloudMaker using:

* [CreateReactApp](https://github.com/facebook/create-react-app)
* [styled-components](https://www.styled-components.com/) for general styling
* [Ant Design](https://ant.design/) for sliders and radio buttons
* [Lodash](https://lodash.com/) - for the color button mapping

You can find CloudMaker's [public repository](https://github.com/theothermelissa/cloud-maker) on GitHub.

### Installation

```sh
$ git clone https://github.com/theothermelissa/cloud-maker.git
$ cd cloud-maker
$ npm install
$ npm start
```

Enjoy!
