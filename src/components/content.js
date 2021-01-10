import React from "react"

let style = {
  fontFamily: "Raleway, sans-serif",
  fontWeight: 300,
  fontSize: "1.2em",
  letterSpacing: 1,
}

let div = {
  width: "100%",
  padding: " 5vh 5vw",
}

let imgs = {
  width: "80%",
}
export let contentPages = [
  {
    id: 1,
    title: "Custom User Interfaces",
    thing: ["identity", "technology"],
    letters: ["AN", "D", "I", "J", "L"],
    img: "sr.jpg",
    body: (
      <div style={div}>
        <img
          style={{
            height: "80vh",
            display: "block",
            margin: "0 auto",
          }}
          src="https://s7.gifyu.com/images/entancegif.gif"
          alt="entancegif.gif"
          border="0"
        />
        <p style={style}>
          <b>The entrance page</b>
          <br />
          The Analog Space mobile app was initially intended to implement the
          freemium scheme, however this was cut out of the scope at the early
          stage of app and content development by the main stakeholder. Our
          mutual decision then, as the company co-funders, was to focus on the
          app’s unique selling point which are the custom darkroom/lab
          tutorials. It will be decided later on, after the project is
          completed, if the app will be free/freemium/paid. Therefore, I could
          not design a standard login page, with the login form followed by the
          register page. The user will for now have two options to choose from :
          be a logged in user and use the app fully, or continue without signing
          in, which will then limit him/her to be only a silence observer. If he
          chooses to interact, the user will have to start an account. This way,
          if Analog Space decides to add the paygate, it could apply only to
          logged in users, and there won’t be any significant design changes.
          <br />
          <br />
          I decided during the design stage of the app that after the onboarding
          page, the user will be placed on an “entrance” page. The entrance page
          in my mind was a page that is initially split in half, and if the user
          swipes up, he will be shown the sign in sceen. Swiping down will move
          the user to the main page of the app, giving him only the possibility
          to look around the app without any interactions (no likes, comments,
          contest entries etc.).
          <br />
          <br />
          This interface seemed very easy at first, one could say it was
          ‘simple’. However, once I started to implement the entrance page, I
          started to hit a wall. And once I broke through the bricks by solving
          a problem, another wall would appear. I have spent a lot more time
          than planned building this interface, but I do not regret it. I did
          not sacrifice my initial vision for the page by some quick fix or a
          compromise. Instead, I worked through all the problems I faced.
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/VgHCzzW/Zrzut-ekranu-2020-08-22-o-14-53-55.png"
          style={{
            width: "35%",
            display: "flex",
            display: "block",
            margin: "2.5vh auto",
          }}
        />
        <p style={style}>
          <b>PROBLEM 1: Choose a widget</b>
          <br />
          Widgets are high level objects used to describe any part of an
          application. It can be but is not limited to UI elements such as
          buttons ; layout (alignment, padding, ...) ; data (a theme,
          configurations) ... Widgets can be everything. In flutter, almost
          everything you'll code will be inside a Widget. Even things like
          "redux reducers" are widgets in flutter. In a sense, widgets are
          extremely similar to React components.
          <br />
          I had many options to choose from, when it came to finding a scrolling
          widget. There are ScrollViews, CustomScrollViews, NestedScrollViews
          and Scrollable widgets. Neither of these turned out to be the right
          option to implement the design I have invisioned. All of the above
          widgets, all though they are scrollable, they do not come with a built
          in “border”. A border is a trigger point that should initiate an
          animation in my case. I tried to implement the “border” in a custom
          scroll view but quickly gave up on the idea. After consulting with my
          mentor I chose a PageView, which come with a ‘built in’ border that
          triggers an animation. It might seem like it was an obvious choice
          which I should go with in the beginning. However, PageView came with
          it’s own challenges (PROBLEM 2).
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/KLP9JZK/Zrzut-ekranu-2020-08-22-o-14-57-42.png"
          style={{
            width: "45%",
            display: "flex",
            display: "block",
            margin: "2.5vh auto",
          }}
        />
        <img
          src="https://i.ibb.co/Vx9s1wp/Zrzut-ekranu-2020-08-22-o-14-57-57.png"
          style={{
            width: "45%",
            display: "flex",
            display: "block",
            margin: "2.5vh auto",
          }}
        />
        <p style={style}>
          <b>PROBLEM 2: Load in the mid page</b>
          <br />
          The PageView allowed me to keep two full height, independent pages in
          swipeable container. I previously implemented the PageView in the
          onboarding section, where you can see it’s horizontal version.
          <br />
          <br />
          The entrance page had to be a vertical PageView, loaded mid page.
          After carefully looking through the documentation I found out there
          was no prop I could simply set to achieve the effect I was hoping for.
          My PageView had a controller attached to it, monitoring the page
          postion amongs other things. I tried scrolling to the mid page on page
          load but ran into many errors. It would work sometimes, but after
          restaring the app, it would crash on this page. The problem was the
          timing of this function. I tried to place it in many different places,
          however, every time I would find out that the PageView was not ready
          yet, or it’s “children” - the pages - were not present.
          <br />
          <br />
          In Flutter a context is a very, if not the most, powerful thing. To
          make any animation happen, I have to pass the context there. Therefore
          I tried to place the animation inside of the build function. But since
          the layout is not built yet, I had to assign a sort of a listener for
          after the pageview is ready. Still, that was not enough, as
          occassionally an error would make the app crash. Here is my final
          solution:
          <br />
          <b>
            1. Add a post frame callback in the build function and pass the
            context
          </b>
        </p>
        <img
          src="https://i.ibb.co/p3BGfjP/Zrzut-ekranu-2020-08-18-o-21-01-27.png"
          style={{ width: "80%", display: "block", margin: "5vh auto" }}
        />
        <p style={style}>
          <b>
            2. Check if the pages have attached and block the animation if the
            view was re rendered due to another (page child) animation.
          </b>
        </p>
        <img
          src="https://i.ibb.co/CzQyKKG/Zrzut-ekranu-2020-08-18-o-21-03-03.png"
          style={{ width: "80%", display: "block", margin: "5vh auto" }}
        />
        <p style={style}>
          I believe it’s an elegant solution to all the problems I have gotten
          on my way. Programmers often mask problems with a lot of code, I
          managed to fix it with just a few lines (and a lot of time and
          determination).
          <br />
          <br />
          <b>Animations in Flutter</b>
          <br /> <br />
          I designed two animations that were to be attached to the tutorial
          screens. One in which there are moving flames underneath a pot with
          water and a floating tank. The second animation is pouring chemicals
          from different bottles into the tank – so variations of the same
          animation with one element being unique. I didn’t have any experience
          with creating animations before, especially in the context of a cross
          mobile application created with Flutter.
          <br /> <br />
          After reading the official tutorial on <a>animations in Flutter</a> I
          created the animations using a combination of: <br />
          &middot; AnimatedContainer widgets <br />
          &middot; Column with centered SlideTransition widget <br />
          &middot; Positioned Image Assets <br />
          &middot; Stack widget for positioning elements on top of eachother{" "}
          <br />
          &middot; Animation Controller <br />
          &middot; Tween <br />
          &middot; Timer <br /> <br />
          I want to go more in depth on the process of creating th Heating
          Animation because the same logic and concepts were applied to the
          other animation, and the heating one is the more complex of the two.
          <br /> <br />
          <b>Heating Animation</b>
          <br /> <br />
        </p>
        <img
          src="https://i.ibb.co/z7HNQVc/ezgif-1-e87bc369e0db.gif"
          style={{ width: "35vw", display: "block", margin: "2.5vh auto" }}
        />
        <img
          src="https://i.ibb.co/5B38Qx4/anima.png"
          style={{ width: "50vw", display: "block", margin: "5vh auto" }}
        />
        <p style={style}>
          The reason why these rows are separated and positioned on top of
          eachother is to have the fire overlap eachother as it animates. The
          animation for each row is to grow bigger and smaller, in such way that
          when row A grows bigger the row B is growing smaller.
          <br /> <br />
          The fire animation is controlled by two timers which manipulate two
          values called “bigger” and “bigger2”. That value is then passed to the
          Animated Containers which animate the size of the fire icons depending
          on the “bigger” value.
        </p>
        <img
          src="https://i.ibb.co/jw0bL6K/Zrzut-ekranu-2021-01-4-o-19-09-53.png"
          style={{ width: "40vw", display: "block", margin: "5vh auto" }}
        />
        <img
          src="https://i.ibb.co/wsKsbFN/Zrzut-ekranu-2021-01-4-o-19-10-13.png"
          style={{ width: "40vw", display: "block", margin: "5vh auto" }}
        />
        <p style={style}>
          <b>2. Floating tank </b>
          <br /> <br />
          To achieve the feeling of a floating tank I decided for a more
          complicated animation, after trying to animate only the position on
          the Y axis, I decided it wasn’t giving the right feeling. I wanted to
          achieve a motion that could be described in a linear form such as in
          the image below.
          <br /> <br />
        </p>
        <img
          src="https://i.ibb.co/h7mFwPF/Zrzut-ekranu-2021-01-4-o-19-12-41.png"
          style={{ width: "40vw", display: "block", margin: "5vh auto" }}
        />
        <p style={style}>
          To achieve this animation I used a Tween because by default, the
          AnimationController object ranges from 0.0 to 1.0. If you need a
          different range or a different data type, you can use a Tween to
          configure an animation to interpolate to a different range or data
          type. For example, I used the Tween to manipulate the offset data of
          the positioned element, but it could also be used to animate two
          colors, or to manipulate a slider with values starting at –200 and
          ending and 5000. Anything is possible with a Tween. I’m excited to
          learn about this technique, as it is relatively easy once the Tween is
          paired with a Widget that it can affect. The choice of the widget is
          what can be problematic. In my case the tank is floating – to achieve
          it, it needs to have “room” for that movement. Therefore, I used a
          column with a cantered (positioned) slide transition. The slide
          transition widget displays the tank icon.
        </p>

        <img
          src="https://i.ibb.co/ch0m1zc/OFFSET.png"
          style={{ width: "50vw", display: "block", margin: "5vh auto" }}
        />

        <img
          src="https://i.ibb.co/BTRy26q/Zrzut-ekranu-2021-01-4-o-19-14-42.png"
          style={{ width: "40vw", display: "block", margin: "5vh auto" }}
        />

        <img
          src="https://i.ibb.co/KKT4g5x/Zrzut-ekranu-2021-01-4-o-19-14-20.png"
          style={{ width: "40vw", display: "block", margin: "5vh auto" }}
        />

        <p style={style}>
          <b>Conclusions</b>
          <br /> <br />
          I’ve been postponing learning about animations for a very long time
          and even in the duration of this project, I was hesitating to try
          them. To my surprise creating animations is Flutter is quite easy once
          you get to know all the tools and their combinations. The concept
          wasn’t easy to grasp at first – there are widgets that are shown in
          the view such as Animated Containers that can be controlled by an
          Animation Controller, but don’t have to be. The Animated Containers
          can be controlled by any dynamic value, like the ones I introduced
          with the use of Times for the Fire Animation. Consecutively, Animated
          Controller can be used to animate a widget that cannot be animated at
          first – the Animated Controller can be only used to manipulate a value
          that’s later used in a “normal” widget such as an image asset. The
          combination of these versatile elements depends on the goal that we’re
          trying to achieve.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Light Research",
    thing: ["technology"],
    letters: ["L", "J", "AN", "AD"],
    img: "vue.jpg",
    body: (
      <div style={div}>
        <p style={style}>
          <b>Problem description</b>
          <br />
          The Analog Space app consists of several darkroom and film processing
          tutorials. During these activities the user may not be able to:
          <br />
          &middot;touch the screen
          <br />
          &middot;see the screen
          <br />
          &middot;have the screen emitting any light onto the light sensitive
          materials.
          <br /> <br />
          During the course of this project I have been trying to answer several
          important questions in order to design and implement the tutorials in
          a usable way. The most important problem to tackle was the screen
          emitting light during the tutorial process, which could possibly
          damage any light sensitive materials such as printing paper and film
          rolls. Analog Space had to first proof that in fact, it was a problem,
          and what could be possible solutions to it. Would it be enough to
          create a fix we can program into the app, or will it turn out to be
          impossible?
          <br />
          <br />
          <b>Q1: How does a computer screen show the color black? </b>
          <br />
          This question may sound simple but turns out to be quite complex. It
          had to be answered in order to determine if displaying a full black
          screen is enough to keep the light sensitive materials safe in the
          darkroom. Different devices have different screens, and each type of
          screen shows the color black in a different way.
          <br />
          <br />
          Old CRT screens would show black by not sending any electrons to that
          part of the screen. Essentialy, the black part is not “glowing” -
          emitting any light. However we won’t find a CRT screen on any of the
          devices that will be supported by the Analog Space app.
          <br />
          <br />
          There are also LCD screens where there is a light illuminating the
          whole screen surface, and a liquid crystal layer on top of the
          surface, which becomes more or less opaque when it is stimulated,
          which can eventually hide the "glow”.
          <br />
          <br />
          The LED screenes are constructed from multiple small LEDs, where 1 LED
          does not equal to 1 pixel. LEDs are much larger, they can, however,
          turn off in areas where there is no light needed, so if a large area
          is black it can darken to a much darker level. There are still LCD
          pixels over the top of this which can block the light from the LED
          when it is turned on, but they cannot produce the same degree of
          blackness as turning the LED off. Finally, we have an OLED screen. LED
          screens produce black simply by fully closing the pixel shutter - the
          back light is still shining (it never actually turns off) but the
          light itself is being blocked. An OLED instead turns the pixel off
          entirely to produce the color black, saving energy in the process.
          <br />
          <br />
          <b>Q2: Is black screen light a safe light? </b>
          <br />
          I tried to determine the minimal amount of lumens that would
          potentially destroy any photographic material. If a black screen of a
          phone would emit less than that it would be considered a safelight.
          Light meters which are popular in photohraphy and are often built into
          cameras do not measure the amount of lumens preciselly. They serve
          more as a guidance on how to get a perfect photo. This research could
          be conducted with the use of a lumen meter. However, to test it, we
          would need a darkroom. Our workspace currently operates without the
          darkroom as the building is undergoing some changes. On top of that,
          this trial and error process would consume a massive amount of
          photographic materials that are now considered near extinct. I had to
          approach this question at a different angle, finding out if a black
          screen light could even fit anywhere on the safelight types list.
          <br />
          <br />
          A safelight is a type of lighting fixture used to provide working
          light in photographic darkrooms. By definition, the safelight is a
          light source emitting light in an area of the spectrum that does not
          affect the light sensitive materials for which it is designed. Below
          is a list of safelights approved for a specific set of Kodak
          lightsensitive materials*.
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/phqp4T4/Zrzut-ekranu-2020-08-31-o-21-42-55.png"
          style={{ width: "80%", display: "block", margin: "5vh auto" }}
        />

        <img
          src="https://i.ibb.co/0CKJr8x/Zrzut-ekranu-2020-08-31-o-21-43-04.png"
          style={{ width: "80%", display: "block", margin: "5vh auto" }}
        />
        <p style={style}>
          After analysing the collected materials I have concluded that a mobile
          screen, no matter what kind, could possibly become a darkroom
          safelight with a use of a safelight filter. This safelight filter
          would have to be of a dark-red color, and the phone’s screen
          brightness would have to be set on low. This is a no-go, because such
          solution is not only expensive, it also does not fit into the idea of
          having a programmatic solution to the light emission problem.
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/44pspPp/Zrzut-ekranu-2020-08-31-o-21-51-52.png"
          style={{ width: "80%", display: "block", margin: "5vh auto" }}
        />
        <p style={style}>
          <b>Conclusion</b>
          <br />
          “Black” in this medium means absence of light. So the better we can
          block the light, the better the black levels. Achieving a “black
          screen” turned out to be impossible due to different types of screens
          that will be supported by the app. We cannot assure that the user’s
          screen will not damage the light sensitive materials.
          <br />
          <br />
          Blocking the screen with a full black display is also another problem
          we had do consider when making safety(light)-related decisions. We
          cannot block the notifications that come from other apps and the
          operating system. We also cannot block the incoming calls and
          messages. These kind of actions would result in the screen lighting
          up, eventually causing hazard to the print/film. All of the answers
          collected in the course of this research have led me to this
          conclusion: it is not possible to simply block the screen from
          emmiting light. We have to force our users to cover their screens, or
          putting their phones below the photo sensitive material, separated by
          high-density, light proof material.
          <br />
          <br />
        </p>

        <img
          src="https://i.ibb.co/dcY2v9g/135565836-153589692940357-1203294323322872550-n.jpg"
          style={{ width: "80%", display: "block", margin: "5vh auto" }}
        />
        <p style={style}>
          <br />
          <br />
          Question no.2 has raised a lot of other, interesting paths for future
          research. Can a mobile phone screen become a safelight with a use of a
          filter? Possibly. Such filter could not be an actual, market-available
          filter for dakroom lightbulbs. Instead, it would have to be in a form
          of a foil or a phone case that would persist the user touches. We are
          unsure if there is any need for such product in the world of analog
          photography. Analog Space will continue researching this concept after
          the end of this project.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "SVGs in Hybrid Apps",
    thing: ["creativity", "global citizenship"],
    letters: ["L", "AN", "J"],
    img: "diydarkroom.jpg",
    body: (
      <div style={div}>
        <img src="https://i.ibb.co/6twsJH0/mycam.jpg" />
        <p style={style}>
          SVG is a short for Scalable Vector Graphics, and it’s an XML-based
          markup language which sole purpose is to describe a 2D vector graphic.
          SVGs are very popular among web developers because they can be scaled
          without loosing resolution, they are quick to load and most of all –
          the are easily interactable in the web environment. It’s not that easy
          to achieve all of that in the context of a hybrid mobile app, but I
          chose to use SVGs anyway. I believe there are more pros than cons in
          the solution I have chosen. Most of the icons and photos with
          decorators used in the Analog Space application are in this format.
          <br />
          <br />
          <b>Why not raster graphics? </b>
          <br />
          The resolution / pixel density of the mobile device is is a concern
          when building the layout consiting of raster graphics. While Flutter
          can load appropriate image size automatically (Flutter’s Asset Image
          is resolution-aware), it still requires a lot of work for both the
          designer and the developer. Every vector graphic designed must be
          exported into several different sizes that later have to be put in a
          very strict structure, with each file carefully named according to the
          convention.
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/CnFkXmj/Zrzut-ekranu-2020-09-8-o-17-09-21.png"
          style={{ height: "20vh" }}
        />

        <p style={style}>
          This structure, while easy, is usually resulting in a lot of manual
          file renaming. Designers give off raster graphics with the pixel
          density in the file name, as having three files of the same name and
          extension in one folder is not possible. For a larger project, that
          results in a lot of time wasted. Yet another reason for not using this
          solution are...
          <br />
          <br />
          <b>Benefits of using SVGs</b>
          <br />
          <br />
          <b>1. Saving space </b>
          <br />
          <br />
          The first and main advantage of using svg’s is the decreased amount of
          space used for the assets folder in our app. Not only we don’t need to
          load each file up to 5 times and create all the folders necessary to
          satisfy the AssetImage requirements, the svgs themselves weight less
          compared to just one of those .png resources. In
          <a
            href="https://vecta.io/blog/comparing-svg-and-png-file-sizes"
            style={{ padding: "0px 5px" }}
          >
            this
          </a>
          research Vecta made extensive comparison of file sizes, depending on
          different variations of pngs and svgs. Even the most compressed,
          optimised PNG files cannot match an SVG. Embedded fonts and compound
          paths and fills can of course increase the file size. This problem can
          be omitted (according to Vecta) with the use of the Nano SVG
          optimizer. Here are some interesting foundings from that research:
        </p>

        <p style={style}>
          <br />
          <br />
          With or without text, SVG images trumps PNG images on all counts. With
          Nano SVG optimizer, file sizes are very small and yet allow users to
          have a simplified workflow that will render extremely well under all
          resolutions. Assuming you have the 3 images above on your site, and
          you have 10,000 hits on each image, with 50% of them normal
          resolution, 40% 2X and 10% 3x resolution. If you use PNG:
          <br />
          <br />
          &middot; Simple image: 5000 * 6.33KB + 4000 * 11.5KB + 1000 * 16.9KB =
          94.5KB
          <br />
          &middot; Complex image: 5000 * 56.3KB + 4000 * 146KB + 1000 * 249KB =
          1114.5KB
          <br />
          &middot; Image with text: 5000 * 12.0KB + 4000 * 26.5KB + 1000 *
          42.6KB = 208.6KB
          <br />
          <br />
          A use of svg optimizer can be justified in a case the assets were
          given off from an unreachable designer, and they cannot be re-saved at
          the moment. Even then, if the developers have a licence for Adobe
          Illustrator, they should be able to achieve similiar effects without
          any design knowledge. The desirable effect being a maximally
          compressed SVG file.
          <br />
          <br />
          One thing Nano does well is it compresses the complex text path. In my
          personal belief, it’s in a way barking at a wrong tree. If a designer
          handed off a file where the text and compound shapes are not expanded,
          the asset should be rejected until an appropriate file is sent. An SVG
          that is saved in a wrong way can cause a lot of issues, as I will
          describe in the further section of this article.
          <br />
          <br />
          I decided to make my own experiment to see how the file size will
          change depending on the variation of saving settings and content
          prepping. What is content prepping in this case? A designer should
          hold two vector files – one, an editable .ai file and one optimized
          .svg file where all complex shapes and text is expanded. The main
          thing is that once the object no longer holds it’s editable
          properties, it takes up a whole less space. Here is the proof.
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/s60CDdr/Zrzut-ekranu-2020-09-8-o-20-32-07.png"
          style={{ height: "20vh" }}
        />
        <p style={style}>
          <br />
          I created three artboards, and created a very simple design. As a base
          I have two rectangles, with a fill and an outline. The second box has
          the text, in it’s editable form. The designer still has a chance to
          change the font, size, letter spacing, etc. In that box the base is
          also in the editable form. The third box has all the objects in the
          artboard expanded.
          <br />
          <br />
          Expanding all objects in Adobe Illustrator is as simple as doing
          Ctrl+A and then going to object->expand... It only takes a few seconds
          and the impact it has on the file size is remarkable. This should be a
          standard, but from my experience as a web and mobile developer I know
          that the vector files I got from a designer often required extra work
          from me. From the other hand, some of the best platforms for designers
          to compete at, such as 99designs, require the artwork to be submitted
          in it’s expanded form at all times. Seeing the results of my small
          experiment made me realise that expanding all objects is the way to
          go.
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/GJm3vgT/Zrzut-ekranu-2020-09-8-o-20-31-42.png"
          style={{ height: "20vh" }}
        />
        <p style={style}>
          <b>2. Interactivity </b>
          <br />
          <br />
          Given the text-based nature of scalable vector graphics, one can open
          them in any text or code editor. The XML markup might seem a bit
          unreadable at first, but with the correct formatting, any svg can
          become a readable string. The SVG consists of simple tags which are
          ordered in a logical manner. That is making the svg interactive. In a
          web context we often see svg actions such as change of color,
          movement, scaling, after an event was trigger – like a hover or
          onclick. HTML5 has an svg tag and a web developer can use the
          interactive properties of an svg through CSS.
          <br />
          <br />
          SVG graphics open doors to animations and interactive content that was
          simply not possible with raster images. The Analog Space app will have
          a lot more animations and interactivity added after the main features
          are satisfactionary. The profile page will have an svg world map which
          will change the country color if the user have tagged a photo in that
          location. This may not be incorporated in the first version, but will
          definitely be built before the release. Because we plan on doing all
          these things, we had to find a nice way of using the interactive
          possibilities of svg in flutter.
          <br />
          <br />
          <b>Challenges </b>
          <br />
          <br />
          First challange was that Flutter doesn’t come with an SVG support out
          of the box. I had to use an extra library in order to load my svgs
          into view. The best and well known solution to this problem is using
          the flutter_svg dart package. This library, while it’s solving the
          primary issue of how to load the svg asset into the view, it’s also
          creating other problems. The todo and out of scope list of this
          package is quite extensive. Meaning one will find it nearly impossible
          to do any of the things from that list. That will require writing
          extra code, and/or trearing the svg as a string, manipulating it, and
          loading into view in it’s new (text) form.
        </p>

        <img
          src="https://i.ibb.co/m4H5Lfy/Zrzut-ekranu-2020-09-9-o-16-45-49.png"
          style={{ width: "45vw" }}
        />

        <img
          src="https://i.ibb.co/MMfXJj7/Zrzut-ekranu-2020-09-8-o-21-53-14.png"
          style={{ width: "45vw" }}
        />

        <img
          src="https://i.ibb.co/7gdcbq8/Zrzut-ekranu-2020-09-8-o-21-53-24.png"
          style={{ width: "45vw" }}
        />
        <p style={style}>
          <br />
          <br />
          Exporting my svg assets took quite some time. After installing the
          above mentioned package I thought I am just one step away from loading
          my vector icons into a mobile app screen. I was very suprised to find
          out all my icons had to be re-saved. One of the main issues of this
          package is that it does not support inline styles. For people who
          don’t have a software licence for a graphic program such as Adobe
          Illustrator, using a program such as SVGCleaner seems to be a right
          solution. More can be read in this git issue:
          <a
            href="https://github.com/dnfield/flutter_svg/issues/105"
            style={{ padding: "0px 8px;" }}
          >
            link
          </a>
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/PzSygBR/Zrzut-ekranu-2020-09-8-o-21-32-01.png"
          style={{ width: "45vw" }}
        />
        <img
          src="https://i.ibb.co/x3nGVS1/71539342-00310300-2961-11ea-817c-fd170787dcf4.jpg"
          style={{ width: "45vw" }}
        />
        <img
          src="https://i.ibb.co/rvKCrkn/71539344-07f0a780-2961-11ea-95c9-755a84aa7087.jpg"
          style={{ width: "45vw" }}
        />
        <p style={style}>
          <br />
          <br />
          To avoid the error all svg assets must be saved without inline css
          style. That actually comes in hand later on, when we choose to
          manipulate the svg as a string. It’s important to note SOME
          interactivity can already be achieved with this package. We could
          achieve changing the color of an svg on tap. However, that could only
          be applied to the whole vector, not a single element from it. The
          package doesn’t understand tags. Tag id’s are coming from the program
          where the design is created. In my examples below they are teh default
          values in polish. That can be adjusted later on in the text editor.
          Each layer has their own tag with a corresponding id. These id’s are
          mentioned in the css style. By manipulating these values as text we
          can go much further than changing the color of only a whole icon. We
          can manipulate things such as image fills, text values, outline widths
          and colors.
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/j3Zxd7t/Zrzut-ekranu-2020-09-8-o-22-09-11.png"
          style={{ width: "45vw" }}
        />
        <img
          src="https://i.ibb.co/r4SnCV6/Zrzut-ekranu-2020-09-8-o-22-10-53.png"
          style={{ height: "25vh" }}
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "Engineering Chemistry",
    thing: ["technology"],
    letters: ["AN", "J", "AD", "D", "I"],
    img: "wolfpack.jpg",
    body: (
      <div style={div}>
        {/* <img src={require("../images/it.jpg")} style={imgs} /> */}
        <p style={style}>
          <b style={{ fontSize: "4vh" }}>Problem definition & judgement </b>
          <br />
          <br />
          The idea of creating a film processing tutorial in a mobile app came
          when me and my business partner started developing film together back
          in 2017. I purchased a Tetenal C41 Color kit in May 2017, but didn’t
          manage to develop any film up until late August that year. The reason
          was that the manual attached to the kit I purchased was not clear
          enough. Not only the instructions were presented in a format that I
          was no fimiliar with, it also lacked crucial information about
          developing film alone at home for the first time. I aked Mike for help
          and together we launched an extensive online research about this kit,
          trying to gather information that will lead us to our first
          successfull film development. This was very time consuming and could
          at times be frustrating. Once again, the materials we were finding
          online were presented in an outdated format. We were expecting a clear
          set of instructions, description of each consecutive step, rather than
          many different ways we can interpret the weird development times table
          given in the original manual. That’s when we first had the idea of
          presenting these instructions in a more modern, hustle-free way.
          <br />
          <br />
          Now, few years later we are running our own lab and we have gained a
          lot of experience developing various types of film with different
          kits. Some were meant for amateurs, some are only meant for
          proffessional use. All of this collected knowledge has led Analog
          Space to realisation about these unclear user manuals in chemistry
          kits for film development. The reasons why these brochures are so hard
          to understand are because:
          <br />
          <br />
          &middot; even amateur kit manuals are meant for people that have
          experience with chemistry
          <br />
          &middot; if the kit manual presented its full capabilities it would
          become even more complex
          <br />
          &middot; the manual isn’t concerned about the user's setup and it’s up
          to them to research how the times given in the manual have to be
          adjusted given the way they plan on processing their film
          (manual/auto/cold)
          <br />
          <br />
          I believed all these issues will no longer exist in a context of a
          well-built mobile app that has massive amount of reliable data on
          which I can build a dynamic film processing tutorial. Here is how
          these issued are tacked in a mobile app context:
          <br />
          &middot; The tutorial would not require any previous knowledge on
          chemistry or developing film, no tables with raw data would be
          presented to the user, instead it will be text/commands based
          <br />
          &middot; The tutorials will show full capabilities of each kit without
          confusing the user – he will not have to adjust any step of the
          process manually depending on their setup. Instead, correct tutorial
          steps will be presented to him or her based on their setup
          information, amount of film rolls, and chosen temperature.
          <br />
          <br />
          <b style={{ fontSize: "4vh" }}>DOT Framework: Field</b>
          <br />
          <br />
          The application Analog Space has invisioned is a mix of social media
          dedicated to analog photographers together with a virtual ‘darkroom’ -
          the place where all resources and help for film processing can be
          found. Before we could start designing and implementing our
          application making the ‘social media’ and the ‘virtual darkroom’ its
          main components we had to justify our choice. I, as the project
          leader, had to do a field research in order to establish few things:
          <br />
          &middot; Is there a need for social media for analog photographers,
          and why?
          <br />
          &middot; Do people have interest in developing film at home?
          <br />
          &middot; Those that already develop film – do they know the full
          flexibility of their preferred kit?
          <br />
          &middot; What kits are most popular locally and globally? (The most
          popular kits will be supported by the application)
          <br />
          &middot; Would people use our app?
          <br />
          &middot; To answer these questions I made use out of all the facebook
          groups Analog Space moderates or is a part of. Here is a list of them.
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/SKQpRgG/Zrzut-ekranu-2020-10-4-o-16-58-06.png"
          style={imgs}
        />
        <img
          src="https://i.ibb.co/R0dfyzW/Zrzut-ekranu-2020-10-4-o-16-58-15.png"
          style={imgs}
        />
        <img
          src="https://i.ibb.co/GVXdLtH/Zrzut-ekranu-2020-10-4-o-16-58-23.png"
          style={imgs}
        />
        <img
          src="https://i.ibb.co/1QCN0Bh/Zrzut-ekranu-2020-10-4-o-16-58-42.png"
          style={imgs}
        />
        <p style={style}>
          I shared a survey with these groups and managed to get 44 people to
          answer all my questions. I unfortunately could only post this survey
          on each of the groups once, and pin it on the groups we moderate.
          That’s because posting the same thing several times in the mentioned
          groups is against their rules – the post will not be accepted by the
          moderator. Having this in mind, I wasn’t expecting more than 50 people
          to attend my survey, therefore I am satisfied with the 44 people who
          did answer my questions. And the questions I asked were:
          <br />
          <br />
          1. Do you use instagram?
          <br />
          2. How easy is gaining audience as analog photographer on social media
          platforms? (rate from 1 to 10)
          <br />
          3. How do you gain new followers?
          <br />
          4. Would you use a social media platform dedicated to analog
          photography only?
          <br />
          5. Do you develop your own film?
          <br />
          6. Which process do you use?
          <br />
          7. Which kit do you use?
          <br />
          8. Do you find it hard to figure out the correct development process
          for your setup given the standard kit instructions?
          <br />
          9. Would you use a film processing tutorial on your phone?
          <br />
          10. Do you know alternative processing guidances for the kit you use?
          <br />
          11. Did you ever develop film with semi-stand method?
          <br />
          <br />
          Here are a few examples of answers I got:
        </p>
        <img
          src="https://i.ibb.co/8xY0n9S/Zrzut-ekranu-2020-10-3-o-16-06-31.png"
          style={imgs}
        />
        <img
          src="https://i.ibb.co/x2TCm6q/Zrzut-ekranu-2020-10-3-o-16-06-44.png"
          style={imgs}
        />
        <img
          src="https://i.ibb.co/jk24sSH/Zrzut-ekranu-2020-10-3-o-16-06-51.png"
          style={imgs}
        />
        <img
          src="https://i.ibb.co/G0V407T/Zrzut-ekranu-2020-10-3-o-16-07-01.png"
          style={imgs}
        />
        <p style={style}>
          Tu summarize, these are the conclusions I drew from this survey:
          <br />
          <br />
          &middot; Majority of analog photographers use Instagram to share their
          work but they find it hard to gain new followers there. They usually
          make use of other platforms to draw attention to their profiles on
          this platform. Very popular answer for “how do you gain new followers”
          was “though film facebook groups”. That itself prooves that the issue
          both of our co-funders have with Instagram is a valid problem and we
          are not the only ones struggling to find a bigger audience for our
          work on Instagram. Analog Photographers are not presented with any
          modern alternative to this app, but if there was one, they would most
          probably use it.
          <br />
          &middot; People who develop their own film usually develop in the
          color C41 process using the Tetenal kit. This kit had significant lead
          and we have chosen it for a primary chemistry kit we will support. We
          ran an extensive research on the flexibility of this kit to present
          our users with every possible, reliable way this kit can be used with
          satisfactionary results.
          <br />
          &middot; People who develop their own film or tried to find the
          manuals attached to the kits very hard to understand.
          <br />
          &middot; People who develop their own film with the use of any starter
          kit are not aware of alternative processes available for them.
          Majority had no idea about possible semi-stand process for every kit.
          Semi-stand process is a development ran in cold temperature that spans
          over several hours. This process is never included in any manual, but
          can be achieved in any kit we plan on supporting.
          <br />
          <b style={{ fontSize: "4vh" }}>Lab – Tetenal Kit research </b>
          <br />
          <br />
          <br />
          In order to reflect the Tetenal Kit’s full flexibility in our app
          extra research had to be done. At the begining of this project Analog
          Space have changed the primary chemistry from the Tetenal Kit to the
          Kodak Flexicolor solutions. The kit that’s currently in use at our
          company is not popular among amateurs so together with the main
          stakeholder, Michal Czorniej, we decided not to support it. I planned
          on making this lab research at Analog Space, however this was not
          possible due to several reasons:
          <br />
          1. It would be very expensive
          <br />
          2. It would be very time consuming
          <br />
          3. It would be wasteful
          <br />
          I concluded that the best way to make this lab research was to
          outsource it to our lab friends from across the world who happen to
          use the Tetenal Kit. The goal was to get a set of times that assure
          successfull process. Our “lab rats”, to which Analog Space is very
          grateful, conducted the lab research for us by switching up their
          development process while operating their business as usual. Thanks to
          James Lane (Zone Imaging Lab from UK) and Skibek Plocki (independent
          film lab in Poland) I obtained this raw data that became crucial
          during implementation of the film processing tutorial.
          <br />
          <br />
        </p>
        <img
          src="https://i.ibb.co/TmVSZnS/Zrzut-ekranu-2020-08-25-o-21-25-29.png"
          style={imgs}
        />
        <img
          src="https://i.ibb.co/9TZyzD4/Zrzut-ekranu-2020-08-25-o-21-25-01.png"
          style={imgs}
        />
        <p style={style}>
          <br />
          <br />
          <b style={{ fontSize: "4vh" }}>Realisation</b>
          <br />
          <br />
          After gathering and analyzing all of the survey’s answers I’ve moved
          on to a lab research. First, I established that the working (partial)
          product I am trying to deliver will support the most popular kits from
          the field research. I decided to begin with supporting these three
          kits to a specific extent: Tetenal C41 Color Kit – provide full
          support for this kit, expand the processing options from the manual
          with alternative processes (extra research) Rollei Cinestill Color
          Simplified 2-step bath My research began by gathering raw data on
          processing for each of these kits manuals. I then translated these
          manuals into a sequence of decisions and instructions. I found
          overlapping patterns and this way I ended up with the activity diagram
          that describes the tutorial process from the user’s perspective.
          <br />
          <b>step 1: gather and analise the raw data from each kit</b>
        </p>

        <img
          src="
          https://i.ibb.co/HpjHgQ4/Zrzut-ekranu-2020-10-4-o-17-12-23.png
          "
          style={imgs}
        />
        <img
          src="
          https://i.ibb.co/yNFzC9H/Zrzut-ekranu-2020-10-4-o-17-12-28.png
          "
          style={imgs}
        />
        <img
          src="
          https://i.ibb.co/m4JXjNV/Zrzut-ekranu-2020-10-4-o-17-12-48.png
          "
          style={imgs}
        />
        <img
          src="
          https://i.ibb.co/wY10shQ/Zrzut-ekranu-2020-10-4-o-17-12-57.png
          "
          style={imgs}
        />
        <img
          src="
          https://cdn.shopify.com/s/files/1/0339/5113/products/CS41_pint_qt_gal_page2_1024x1024.jpg?v=1600383124
          "
          style={imgs}
        />
        <p style={style}>
          <br />

          <br />
          <b>step 2: break it down into steps</b>
          <br />
          <br />
        </p>
        <img
          src="
          https://i.ibb.co/5hJ8NqR/step2.jpg
          https://cdn.shopify.com/s/files/1/0339/5113/products/CS41_pint_qt_gal_page2_1024x1024.jpg?v=1600383124
          "
          style={{ height: "60vh" }}
        />

        <p style={style}>
          After making this draft I made a decision of "flattening down" the
          choice of rotation and processing type. They are in a way equal.
          Manual processing type is equivalent to standard rotation, automated
          processing is the same as constant rotation, and semi-stand rotation
          becomes a thind processing type option. In our app we called it "cold
          processing".
          <br />
          <br />
          <b>step 3: design the flow of the activity</b>
        </p>
        <img
          src="https://i.ibb.co/8DX7hyq/Zrzut-ekranu-2020-10-4-o-14-13-13.png  "
          style={imgs}
        />

        <p style={style}>
          <b>step 4: realisation</b>
          <br />
          <br />
          After all data was gathered I proceeded with the implementation of the
          tutorial pages.
          <br />
          I identified these pages in the flow:
          <br />
          1. Tutorial page – here the user picks the kit
          <br />
          2. Processing page – depending on the kit the user may pick between
          manual, automatic and cold (semi-stand) processing
          <br />
          3. Temperature page – depending on the kit and processing type the
          user has chosen, he will be presented with a set of temperatures to
          choose from. This is the temperature at which he will develop.
          <br />
          4. Film amount page – the user picks amount of rolls he will develop
          at once (1-4)
          <br />
          5. Pre-step page – user is reminded about the commands, is shown how
          to load the film into the tank and completes a security checklist
          before starting the process,
          <br />
          6. Heat page – user completes the pre-heating task by using the voice
          commands and waiting through the timer
          <br />
          7. Developer page – user completes the development stage with the use
          of timer and voice commands
          <br />
          8. Bleach page – user completes the bleach stage with the use of timer
          and voice commands
          <br />
          9. Rinse page - user completes the rinse stage with the use of timer
          and voice commands
          <br />
          10. Final page – depending on the kit and type of processing this can
          be either stabilizator or final wash stage, which is completed with
          the use of timer and voice commands
          <br />
          <br />
          Steps 6-10 share the same layout but have a different logic behind
          them. The correct time is assigned to the timer depending on the
          choices made in previous steps. This layout has three states:
          <br />
          <br />
          -pre timer (user reads instruction)
          <br />
          -timer (user is proceeding with the instructions in the real life)
          <br />
          -after timer (user reads instruction and navigates to next step)
          <br />
          All of these pages have a different animation on the top, which is
          controlled in a separate module called the View Model. All animations
          share something in common: a floating element or/and a heating drum.
          All data displayed on the pages is dependent on the choices the user
          has made previously about the preffered temperature, chemistry and
          processing type.
          <br /> <br />
          The implemented solution can be seen below. The naviagtion is
          triggered by a voice command.
        </p>
        <img
          style={{ height: "70vh" }}
          src="https://i.ibb.co/fG1ZS9S/mygif.gif"
        />
        <p style={style}>
          <br />
          <b style={{ fontSize: "4vh" }}>Showroom </b>
          <br />I wanted to proof my solution works in a real-life environment.
          To do a showroom research I had to pick a test subject that has
          interest in film photography but haven’t developed film yet. I looked
          amongs the customers of Analog Space and quickly had Nmutaka Obi
          volounteer to be my test subject. I develop on Mac computer and use
          iPhone as my primary test device, so another criteria Nmutaka had to
          meet was to own an Android phone. That’s because I wanted to see what
          an Android user would say about my app’s UI. This way I got
          information about how my app looks and works one One Plus phone, and
          about the usability of my film processing tutorial. Unfortunately
          Nmutaka wasn’t able to record himself during the process as I
          requested because he was self-quarantined at his house with only one
          mobile phone. He of course needed it to proceed with the tutorial.
          After he finished the process he wrote down his feedback. Here are the
          most valuable foundings:
        </p>

        <img
          src="https://i.ibb.co/7KJ7ZZH/Zrzut-ekranu-2020-10-4-o-14-54-33.png"
          style={{
            height: "40vh",
            display: "block",
            margin: "0 auto",
            paddingBottom: "20px",
          }}
        />
        <p
          style={{ fontStyle: "italic", fontSize: "3vh", textAlign: "center" }}
        >
          "it shouldn’t be possible to navigate when the timer is running. It
          happened to me once by accident (was talking) after 1 minute have
          passed, I navigated back to the timer and subtracted the 1 minute I
          already did from the new timer. Lucky me, I was looking at the phone.
          But I could ruin my photos this way... it was on the bleach step"
          <br />
          <br />
          “it’s weird to have the next/previous navigation on the bottom for me
          because I have a button for back... so I really only need the next
          one”
          <br />
          <br />
          “I could use a reminder of my commands even on the step page. I forgot
          what I had set for previous at the last step.”
          <br />
          <br />
          “I played with the cold development tutorial without developing film
          and noticed the timer was paused when my screen locked. The timer said
          120minutes...”
          <br />
          <br />
          “I really enjoyed this process, I thought developing film is very hard
          because I saw the manual before, but in this app it’s so easy to
          follow. I would consider doing this regulary, not only for fun.”
          <br />
          <br />
        </p>

        <p style={style}>
          Nmutaka successfully developed his first roll of film using Tetenal
          C41 Kit and manual processing at 38 degrees Celcius. This test prooved
          that the format in which our tutorial is presented is correct, more
          understandable to amateurs, just like Analog Space invisioned it. It
          also shown a few flaws in the process that could or should be improved
          before the release of the app.
          <br />
          <br />
          <b style={{ fontSize: "4vh" }}>General Advice </b>
          <br />
          <br />
          In the continuation of this project the bottom navigation from pages
          “Temperature”, “Processing” and “Amount” has to be changed to a singe
          “next” button, because Android users already have a built-in back
          button. To assure that the app looks and feels seemless on both
          platforms the App Bar should be brought back to these three pages (and
          the main tutorial page) in order to place a back button on the header.
          This way every platform will get the same look and same functionality.
          The Color Film Processing Tutorial should serve as a template to the
          black and white film processing. This was not implemented as Analog
          Space lacked the raw data for the black and white kits. We were also
          not able to identify the most popular black and white kit across the
          world. That’s because people use alternative chemicals for this
          processing. A lot of amateurs cook up their own chemistry from things
          they find in their kitchen (as the survey has shown). Because of this
          I recommend adding an extra tutorial on preparing home-made developer
          for black and white film processing.
          <br />
          <br />
          The showroom test made it clear that the cold development tutorial has
          a major flaw. When the app is put in the background (other app was
          opened, user had a call, the screen locked due to long inactivity) the
          timer is paused. That results in a wrong processing time and
          eventually destrying the film. My proposed solutions to this problem
          would be:
          <br />
          <br />
          1. Add two more steps to the checklist : setting for ‘always keeping
          screen active’ and putting the phone in an airplane mode. The internet
          connection is not necessary if the app already knows and remembers the
          user commands, so this is a good workaroud. It will also prevent calls
          and other apps from interrupting the process.
          <br />
          2. Save the timestamp at which the timer was started together with
          it’s duration in the local state of the app. Upon the app going into
          foreground, adjust the timer depending on the saved values.
          <br />
          <br />I believe implementing both of my recomended solutions would
          prevent this problem from occuring again.
          <br />
          <br />
          <b style={{ fontSize: "4vh" }}>Cold-Stand Support Advice </b>
          <br />
          <br />
          The next planned feature to be implemented after the completion of
          this phase of the project is the cold-stand (or semi-stand) improved
          support. The cold-stand support is to be applied on both film
          development tutorials, so it also applies to the deliverable of this
          project – the color film processing tutorial.
          <br />
          <br />
          <b>
            Problem definition – what is semi-stand processing and what issues
            does it introduce in the app
          </b>
          <br />
          Opening the doors to full flexibility of the chemistry kits for my
          users opened up doors to some problems on the application’s end.
          Analog Space wants to display full flexibility of the chemical kits
          used during the film processing tutorials. For example, if the user
          has purchased the Tetenal C-41 kit and plans on using it with our app,
          he will be shown more possibilities on how to develop film with it,
          compared to the manual attached to the kit. The manual would only
          mention manual and automated processing on two temperature settings –
          30 and 38 degrees Celcius. Meanwhile, as a photo lab, Analog Space is
          aware that the Tetenal Kit chemicals can be used in a big range of
          temperatures. One could choose to develop at a temperature as low as
          18 degrees. Developing at temperatures between 18-22 can be called
          semi-stand or cold-stand processing. Processing at these “room
          temperatures” means that our user will dip their film in chemicals for
          much longer periods of time – up to 30 minutes.
          <br /> <br />
          Keeping the screen on for 30 minutes is problematic for many reasons –
          one being the battery usage, and another being simply that an app
          cannot force the user to pay attention only to it. In the 30 minutes
          time the user could lock the phone, answer a call, text. The phone
          could run out of battery and be restarted. So many things could happen
          in such a long period of time. I also know from my own experience that
          I do not pay attention to my timer when I’m doing cold-stand
          processing at Analog Space. The normal process allows for you to
          forget about the film being processed for those 30 minutes, only to be
          rushed to it by an alarm in the least appropriate moment. I’d like
          this app to support and enforce this “tradition” - by delivering it as
          a mobile user experience.
          <br /> <br />
          <b>Solution</b>
          <br />
          In order to assure our distracted user will remember to attend the
          developed film, a number of alarms should be set. One being 5 minutes
          prior to required action, so that the user has time for preparation.
          This way we eliminate the “surprise factor” I mentioned in the problem
          description. After leaving the film unattended for 30minutes one could
          use a reminder that “it’s about time”, instead of having to rush
          unexpectedly.
          <br /> <br />
          My recommended solution is to use the “flutter_local_notifications”
          package. It can schedule notification in the future and it would work
          in foreground, background and when app is terminated - covering all
          problems from the cold-stand scenario. The plugin can be set up for
          Android devices by editing the Android Manifest XML file, and by
          modifying the AppDelegate Swift file for the iOS version.
          <br />
          These steps should be followed:
          <br /> <br />
          <b>1.Add this to the pubspec.yaml file:</b> <br />
          <b style={{ color: "red", letterSpacing: "2px", fontWeight: "100" }}>
            dependencies: flutter_local_notifications: ^3.0.2
          </b>
          <br />
          <b>2.Install by running in the terminal:</b>
          <br />
          <b style={{ color: "red", letterSpacing: "2px", fontWeight: "100" }}>
            $ flutter pub get
          </b>
          <br />
          <b>3. Add activity to the Android Manifest file</b>
          <br />
          <b style={{ color: "red", letterSpacing: "2px", fontWeight: "100" }}>
            {true == true
              ? '<activity android: showWhenLocked="true" android:turnScreenOn="true">'
              : ""}
          </b>
          <br />
          <b>4.Add this to the App Delegate file (iOS)</b>
          <br />
          <b style={{ color: "red", letterSpacing: "2px", fontWeight: "100" }}>
            {true == true
              ? "if #available(iOS 10.0, *) {UNUserNotificationCenter.current().delegate = self as ?UNUserNotificationCenterDelegate}"
              : ""}
          </b>
          <br />
          <b>5. Import it </b>
          <br />
          <b style={{ color: "red", letterSpacing: "2px", fontWeight: "100" }}>
            import
            'package:flutter_local_notifications/flutter_local_notifications.dart';{" "}
          </b>
          <br />
          <b>
            6. Follow the documentation for scheduling notifications and/or
            setting alarms.
          </b>
          <br />
          <a href="https://pub.dev/packages/flutter_local_notifications#displaying-a-notification">
            display notification example
          </a>
          <br />
          <a href="https://github.com/MaikuB/flutter_local_notifications ">
            git repository
          </a>
          <br />
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Touchless User Experience ",
    thing: ["global citizenship", "entrepreneurship"],
    letters: ["L", "AN", "I", "C", "D"],
    img: "breaking.png",
    body: (
      <div style={div}>
        <p style={style}>
          The light research have determined that the user’s phone screen would
          have to be covered in the darkroom setup. The film processing
          tutorials does not happen in the darkroom, but there will be parts of
          it, where the user will not be able to touch the screen. Their hands
          can be wet from water, they could have vinyl gloves on, there could be
          dangerous chemicals on them. All of these factors were taken into
          count when designing the user experience of the Analog Space app. This
          app is mindful of the user’s surroundings – the light settings, their
          capabilities and preferences. Therefore, at times where the user is
          not able to touch the screen, we had to find another way of navigating
          though the tutorial.
          <br />
          <br />
          <b>Timer Solution</b>
          <br />
          <br />
          I first considered making the ‘untouchable’ parts of the tutorials
          timer-based. After a certain type has passed, the tutorial would
          automatically navigate to the next step. This idea was quickly
          disapproved, as using a timer is not an option in these tutorials
          <br />
          <br />
          <b style={{ color: "blue" }}>1.Tutorial C-41</b> <br />
          In this tutorial the user can choose the type of processing they will
          undergo – manual or automatic. Both of these processes can involve
          different types of development tanks, which will vary in types of
          covers and the amount of liquid solutions they can hold. The bigger
          the tank, the longer it will take to pour the chemicals. Of course, we
          also cannot predict the angle at which the liquid will be poured. All
          of these factors make estimating a time it takes to complete a step of
          the C41 tutorial impossible.
          <br />
          <b style={{ color: "blue" }}>2. Tutorial * Printing </b> <br />
          While printing we will allow the users to “pause” the tutorial in the
          repetetive step. When photos are enlarged, if a person is working in a
          team, they might want to focus only on the enlarging instructions.
          They can then process how many photos they want. We will not be asking
          out users if they plan on enlarging 1 or 100 photos. Instead, they can
          repeat this step how many times they want to.
        </p>
        <img
          style={{ width: "50%", display: "block", margin: "5vh 0" }}
          src="https://zdnet2.cbsistatic.com/hub/i/2018/11/17/f19ae851-e141-413c-8bda-c0c6e98640e0/001.jpg"
        />
        <p style={style}>
          <b>Side Buttons Solution</b>
          <br />
          Since using the screen is not an option, I thought that we could maybe
          use the phone’s buttons to navigate the tutorials. This idea was
          discarded because we need at least 3 commands and we plan on expanding
          this set at some point in the future. It’s not possible for us to
          forsee if all phones in the future, or even those currently on the
          market, will have at least 3 buttons available to us. Some phones have
          already got rid of the ‘home’ button as a standalone piece of the
          device, and are instead hiding this button underneath the screen,
          which in our scenario is disabled. Another issue I found is that not
          every phone the Analog Space app will support is waterproof, and even
          waterproof phones are sensitive to chemicals used in the development
          process. At this point we have determined that touching the phone in
          any way is not an option for our darkroom tutorials.
          <br />
          <br />
        </p>

        <img src="https://d35fo82fjcw0y8.cloudfront.net/2018/11/13215740/voice-command-app-Blogheader-e1551339932560.png" />
        <p style={style}>
          <br />
          <br />
          <b>Voice Commands Solution</b>
          <br />
          The conducted research has led me to a conclusion – Analog Space app
          has to use voice commands to navigate through pars of the darkroom
          tutorials. The voice commands would have to be custom – individual to
          every user. That’s because we don’t want to prevent people from
          talking during the tutorial. The steps of the tutorials can ofter be
          quite dull – they require a lot of waiting, and barely any movement is
          done. It’s nice to have a chat then. Analog Space doesn’t want the
          random conversations to be picked up by the app as the voice commands,
          essentially wiping the important progress the user was making. If the
          voice commands would be simply “next”, “stop”, “previous”, then the
          command could be picked up by our app while the user is asking their
          friend what are they doing next.
          <br /> <br />I had to design several screens that allow the user to
          set the voice commands. <br /> <br />
        </p>
        <img src="https://i.ibb.co/GpfmY8N/threescreens.png" />
        <p style={style}>
          <br /> <br />
          To implement my invisioned solution I decided that I had to make use
          out of the native speech reckognition software available on each
          platform I am supporting – that is iOS and Android. Trying to write my
          own speech reckognition software is not something I have planned for
          this project, and would also conflict with the first lesson I was
          given at Fontys – “don't reinvent the wheel”. Before writing any
          native code I decided to explore packages I could use to program this
          for both platforms at once.
          <br /> <br />
          <b style={{ color: "blue" }}>speech_recognition </b>
        </p>
        <img
          style={{ height: "30vh" }}
          src="https://i.ibb.co/8PfhKVs/Zrzut-ekranu-2020-08-31-o-22-41-51.png"
        />
        <p style={style}>
          I considered this library at first. It is the most popular – I have
          found numerous articles describing what I am trying to achieve using
          this library. It has a lot to offer – it checks if the permissions
          were given, and it even supports different languages.
          <br /> <br />
          After trying to work with this package I realised it has many flaws.
          <br /> <br />
          <b>1.</b> Wasn’t updated in a very long time <br />
          <b>2.</b> Has a very important limitation: “On iOS, by default the
          plugin is configured for French, English, Russian, Spanish, Italian.
          On Android, without additional installations, it will probably works
          only with the default device locale.”
          <br />
          <b>3.</b> Any error in this plugin can crash the app, even if it’s
          caught
          <br />
          <b>4.</b> The app is crashing if it goes into background while this
          plugin is in its listening mode.
          <br />
          <br />
          That’s to name a few. After working with this plugin for about a week
          I realised that it is not a good option for the Analog Space app as
          it’s not predictable and it’s not in any undergoing development. I
          have made the decision to look for an alternative.
          <br />
          <br />
          <b style={{ color: "blue" }}> speech_to_text </b>
        </p>
        <img
          style={{ height: "30vh" }}
          src="https://i.ibb.co/QkR6P6m/Zrzut-ekranu-2020-08-31-o-22-49-34.png"
        />
        <p style={style}>
          I found this library that exposes device specific speech recognition
          capability. This plugin contains a set of classes that make it easy to
          use the speech recognition capabilities of the mobile device in
          Flutter. It supports both Android and iOS. The target use cases for
          this library are commands and short phrases, not continuous spoken
          conversion or always on listening. This dart package was recently
          updated and is constantly updated. The issues are being recognised and
          patched. There was a new release on 27/08/2020. These factors made me
          choose this library. I continued my work on the voice commands making
          this plugin my primary tool for the job.
          <br />
          <br />
          <b>step 1: permissions </b>
          Defining the use of certain permissions is a must while installing the
          plugin. Speech_to_text does not come with a permission handler. I had
          to take care of handling the permissions myself. That is: requesting,
          verifying, and handling the worse – which is going around the denied
          permission.
          <br />
          <br />
          I request the permissions as the part of the darkroom checklist. There
          is no need for the user to grant them if he/she is not planning on
          using the tutorials. Once the app ask for the permissions and they are
          granted, the checklists moves on to setting the voice commands. But
          what if the permissions were denied? Not only the user cannot record
          their voice commands, another problem occurs. Permission settings
          cannot be wiped by the app, and once they are denied, I cannot request
          them to be granted again.
          <br />
          <br />I looked around the world of mobile apps and how they handle
          this case. I have two apps on my phone that require permission to
          access my camera roll and my camera. The apps are: RETO3D and 1917.
          After denying permissions the app opens the settings where the user
          can change the permission status himself. I have chosen to implement
          the same solution to this problem.
        </p>
        <img
          style={{ height: "45vh" }}
          src="https://i.ibb.co/NnqDBhT/denied.png"
        />
        <p style={style}>
          <b>step2: define command </b>
          <br /> <br />
          The user holds down the button and records himself saying the chosen
          command at least three times. The speech to text plugin is reporting
          the results as a long string, where each pause is represented by a
          space. Each time a new result is reported by the listener function,
          and at least three words have been reckognised already, I try to
          estimate the best guess of the command. The best guess is then
          presented to the user and he can determine if he want to save the
          reckoginsed word as his command or repeat the process.
          <br /> <br />
          The whole activity of saving the command is shown in the UML activity
          diagram, and spans between the activities taken on the Commands List
          Screen and the Set Command Screen.
        </p>
        <img
          style={{ height: "45vh" }}
          src="https://i.ibb.co/yPGswwM/ezgif-com-video-to-gif.gif"
        />
        <img
          style={{ width: "70vw" }}
          src="https://i.ibb.co/BcSDd8Y/Untitled-Diagram.jpg"
        />
        <p style={style}>
          <b> step 3: save the command </b>
          <br /> <br />
          We want to make the commands specific for each user, not the device.
          The Analog Space app cannot therefore use any local storage to
          memorize these commands. They will instead be stored in Firebase Cloud
          Storage. I haven’t worked with Firebase before and found the process
          of setting it up with Flutter very complicated. There is a long list
          of plugins available and the list of the ones I had to use kept on
          growing with the development of this project.{" "}
        </p>

        <img
          style={{ height: "45vh" }}
          src="https://i.ibb.co/BqzD911/Zrzut-ekranu-2020-09-9-o-17-27-38.png"
        />
        <p style={style}>
          After implementing the authentication (link to social media article) I
          could make use of the user ID in the process of saving the voice
          command. The voice commands are saved using auto generated identifier
          and have only 4 fields.{" "}
        </p>
        <img
          style={{ height: "45vh" }}
          src="https://i.ibb.co/v33gsb8/Zrzut-ekranu-2020-09-9-o-17-29-58.png"
        />
        <p style={style}>
          After setting the voice commands and completing the darkroom checklist
          it’s still possible for the user to change the commands again. In such
          case, new document is not created, but instead I am looking for a
          document reference in a list of document snapshot. If one with the
          currently logged in user is found, then I update the currently
          selected user command. Have in mind I had to create a reusable
          Widget/Page. One page and one function is responsible for saving every
          type of command. That is achieved through parsing passed arguments on
          build, and using the set ‘type’ as the field key during the
          save/update process. Here are some code samples.
        </p>
        <img
          style={{ height: "45vh" }}
          src="https://i.ibb.co/VLGDshh/Zrzut-ekranu-2020-09-9-o-17-32-13.png"
        />
        <img
          style={{ height: "45vh" }}
          src="https://i.ibb.co/51LShxD/Zrzut-ekranu-2020-09-9-o-17-32-40.png"
        />
      </div>
    ),
  },

  {
    id: 10,
    title: "Manage & Control",
    letters: ["M"],
    img: "breaking.png",
    body: (
      <div style={div}>
        <p style={style}>
          Managing and controling a software development project is a broad
          concept that describes various tools and ways of being in control of
          the project’s workflow. It’s not as straightforward as using a version
          control tool - it has many layers. The way the works is planned and
          carried out is also a way of controling. Below I’m trying to explain
          all the layers of managment and control of the Analog Space App.
          <br /> <br />
          <b>Mathodology</b>
          <br />
          When I was first planning my project I decided to use a mix of Big
          Design Up Front (BDUF) and agile approach. The idea was that I
          wouldn’t implement BDUF in a strict way – as in it’s original
          definition BDUF leans forward the waterfall model. The design of the
          application is to be perfected before the implementation phase begins.
          Instead I decided to design as many screens as it was possible after
          the initial phase and research. That’s because the research about the
          chemistry that we’ve (as a company) have conducted was more long-term
          and I couldn’t design the tutorial pages without obtaining the raw
          data about the chemistry we were planning to use. After that I would
          begin planned sprints and develop the application based on the design
          I created. After two and half months I obtained the raw data from the
          chemistry research and began processing it. I had to design a mobile
          experience – not only how the screens will look like but also how they
          will influence the user and how they will interact with it. I had to
          adapt my process as I was learning more about my application context –
          the complicated process of film development and darkroom chemicals.
          That’s why I would no longer call my approach a mix of BDUF and agile,
          however, it still remains valid to a certain extent. A better way of
          describing this methodology would be to call it Design Based Learning
          (DBL). In DBL the person or the team carrying out the project remain
          conscious about the context of the planned application by constantly
          exploring it. That consciousness means testing the planned solution in
          a real-life environment, researching the environment of the problem,
          speaking and learning about the end user. As I learned more about all
          of these things, I was adjusting my process accordingly, while still
          moving forward with designing and implementing the planned components
          and pages of the application.
          <br />
          <br />
          <b> Planning & tracking progress </b>
          <br />
          For planning I used an online list-making tool called trello. Every
          activity that had to be carried out falls under 4 categories with
          corresponding color codes:
          <br />
          &middot; Design – screen, component and animation designs in vector
          format
          <br />
          &middot; Design IT – activity design, everything that has to do with
          the app interacting with the database, database design, class diagrams
          etc.
          <br />
          &middot; Implementation
          <br />
          &middot; Research
          <br />
          <br />
          These activities are placed on 4 different lists depending on their
          status. The lists are:
          <br />
          &middot; To Do
          <br />
          &middot; Doing
          <br />
          &middot; Review – rejected
          <br />
          &middot; Review – need adjustments
          <br />
          &middot; Done
          <br />
          Every activity on this board is a broad section of the application.
          Sometimes having just an activity to move around the lists were not
          enough because I would have to pause in the middle due to unfinished
          research. Other times, a concept was so broad (for example developing
          the film tutorial) that it was almost too overwhelming to start the
          work. To help me fight these problems I used Mark Steel’s approach of
          “Achieving Unachievable”. His idea is that when a person is facing a
          big challenge, one that they cannot really grasp all at once, they
          should divide it into smallest steps possible. By ticking the small
          tasks of the list I was getting motivated and seeing that my work was
          moving forward.
        </p>
        <img
          style={{ width: "70vw" }}
          src="https://i.ibb.co/xGY5cSv/Zrzut-ekranu-2021-01-2-o-18-52-41.png"
        />

        <img
          style={{ height: "55vw" }}
          src="https://i.ibb.co/q16wwrh/Zrzut-ekranu-2021-01-2-o-18-51-10.png"
        />

        <p style={style}>
          <b style={{ fontSize: "3vh" }}>Tools</b>
          <br />
          <br />
          <b>Git</b>
          <br />
          For version control I created a repository on GitHub and used a git
          client on Mac OS called Fork. It took me some time to understand the
          best way for commiting my progress. In the beginning I would face
          issues with the size of my commit being too big. That’s because I
          didn’t set up the .gitignore file properly for a flutter project. I
          was trying to save the re-generated builds and package files every
          time I was changing something small. After setting the ignored files
          correctly I no longer faced any issues.
          <br />
          <br />
        </p>
        <img
          style={{ width: "70vw" }}
          src="https://i.ibb.co/1Qt6jw5/Zrzut-ekranu-2021-01-2-o-19-23-59.png"
        />

        <img
          style={{ width: "70vw" }}
          src="https://i.ibb.co/FwJbcyz/Zrzut-ekranu-2021-01-2-o-19-27-59.png"
        />

        <img
          style={{ width: "70vw" }}
          src="https://i.ibb.co/5WNN3FB/Zrzut-ekranu-2021-01-2-o-19-31-20.png"
        />

        <p style={style}>
          <br />
          <br />
          <b> XCode & iOS Simulator</b>
          <br />
          XCode is Apple's integrated development environment for macOS, used to
          develop software for macOS, iOS, iPadOS, watchOS, and tvOS. I used it
          to run my application on a real apple device as well as to start the
          simulator, which falls under the xcode’s “developer tools”.
          <br />
          <br />
        </p>
        <img
          style={{ width: "70vw" }}
          src="https://i.ibb.co/DYZPGNd/Zrzut-ekranu-2021-01-2-o-20-45-45.png"
        />
        <p style={style}>
          I found XCode to be crucial tool used throughout the entire project.
          With XCode I was able to download the support files and develop the
          app in such way that it will run on the latest iOS devices. The newest
          iOS (14) was released on September 16, 2020, and it’s said that it was
          done without giving the developers enough time to adjust. Because I
          was working on an app that wasn’t previously released, I luckily
          wasn’t affected by it.
          <br />
          <br />
          XCode was also useful when changing the build settings and app
          permissions. XCode has a good interface for manipulating these setting
          without having to write the code yourself.
          <br />
          <br />
        </p>
        <img
          style={{ width: "40vw" }}
          src="https://i.ibb.co/4R9dYMG/Zrzut-ekranu-2021-01-2-o-20-48-31.png"
        />
        <p style={style}>
          <br />
          <br />
          <b> Firebase Console </b>
          The Analog Space app is using the Firebase Firestore, Firebase
          Authentication and Cloud Storage. All of these can be managed inside
          the Firebase Console, which provides me with possibilities to view,
          edit and delete all of the app’s data and users.
          <br />
          <br />
        </p>
        <img
          style={{ width: "70vw" }}
          src="https://i.ibb.co/WBWbJp1/Zrzut-ekranu-2021-01-2-o-21-07-06.png"
        />
        <p style={style}>
          <br />
          <br />
          <b>Visual Studio Code</b>
          <br />
          This tool was definitely the most used one in the last months. Visual
          Studio Code is my personal favourite code editor that Visual Studio
          Code is a free source-code editor made by Microsoft for Windows, Linux
          and macOS. Features include support for debugging, syntax
          highlighting, intelligent code completion, snippets, code refactoring
          and more. To improve my efficiency I used various extensions for this
          program, that let me use a built-in debugger, have code snippets and
          run the app directly from VS Code on the simulator or any connected
          device.
          <br />
          <br />
        </p>

        <img
          style={{ height: "40vh" }}
          src="https://i.ibb.co/fxJxMY1/Zrzut-ekranu-2021-01-2-o-19-58-26.png"
        />
        <img
          style={{ width: "70vw" }}
          src="https://i.ibb.co/0ycTC33/Zrzut-ekranu-2021-01-2-o-19-59-21.png"
        />

        <p style={style}>
          <br />
          <br />
          <b>Adobe Illustrator & Photoshop </b>
          Adobe Illustrator and Adobe Photoshop are programs used for graphic
          design (vector and raster – respectively). I used Illustrator for
          designing the screens. I organised my work by having an artboard
          corresponding to each page. It was very easy to export SVG assets from
          that program, which later would be used in the app as icons or as
          building blocks for simple animations. I used Photoshop for creating
          raster graphics – I was editing pictures and creating different
          graphics to be used in both application and my online portfolio with
          it.
          <br />
          <br />
        </p>

        <img
          style={{ width: "70vw" }}
          src="https://i.ibb.co/D9qLJX2/Zrzut-ekranu-2021-01-2-o-21-39-37.png"
        />

        <p>
          4 screen designs on separate artboards with highlighted grouped vector
          elements
        </p>
      </div>
    ),
  },
]
