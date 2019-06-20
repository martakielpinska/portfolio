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
    title: "Shitty Robot",
    thing: ["identity", "technology"],
    letters: ["A", "M"],
    img: "sr.jpg",
    body: (
      <div style={div}>
        <p style={style}>
          <b>Intro</b>
          <br />
          At the beginning of the minor we were given a Shitty Robot challenge.
          The task was interesting: we were supposed to bring old equipment from
          our houses and repurpose it into robots that will entertain children.
          Everyone was working in groups, and each of them was combining people
          of different cultures and skills.
          <br />
          <br />
          <b>My limits in this project</b>
          <br />
          To kick off our project we looked at the used stuff we brought from
          home to figure out what we could do with it. Normally I would be full
          of creative ideas and I could communicate them easily to my group.
          I’ve been working on many projects where I was chosen to be a leader
          by my teammates. I love being a leader instead of a boss, but
          sometimes I do tend to overlook valuable insights to push my own
          ideas. It’s a flaw of mine that I’ve decided to work hard on during
          this minor. This time pushing myself into a leader role would have
          felt odd, because it was a new environment for me and I was working
          with a number of people who were mechanical engineers. They were more
          skilled in the field of this project and I felt it would be best to
          give them the steering wheel, as they could foresee better if the
          chosen solution will work out, or will be achievable in the given time
          frame.
          <br />
          <br />
        </p>
        <img
          src={require("../images/000030.JPG")}
          style={{
            width: "45%",
            display: "flex",
            display: "block",
            margin: "2.5vh auto",
          }}
        />
        <p style={style}>
          <b>Looking for a solution</b>
          <br />
          Although I was hesitating at first, I did pitch the idea of using the
          hairdryer to inflate a puppet. It was so great to see how this group
          of individuals took this simple idea and went so far with it. They
          added a hide and seek game to our concept, and me and Daisy worked
          together on making our robot likable by children. The hairdryer seemed
          like an obvious solution to us. I always like experimenting with
          things, and trying to find alternative ways of tackling a problem,
          just like with my Darkroom project. That’s why I enjoyed it so much
          when me and my group we’re trying to use a blender as a fan. We 3d
          printed a fan that we clipped on top of the spinning base.
          Unfortunately, the whole thing exploded, and I was very lucky to keep
          my both arms afterwards. I still feel like it was a great idea, and if
          we would have a little more time and a different target group, we
          would have gone for it. We moved back to the hairdryer after the
          experiment went south, to avoid any safety hazards, and keep children
          safe & entertained. It was a great experience and in the future, I
          want to explore more crazy ideas and see how the things we use every
          day can be transformed. I think the important lesson I got from
          considering those alternative ideas is not very original, but
          extremely true: we learn something new every day, but to learn you
          must ask questions. The crazier the question is, the more interesting
          can be the lesson!
          <br />
          <br />
        </p>
        <img
          src={require("../images/000031.JPG")}
          style={{
            width: "45%",
            display: "flex",
            display: "block",
            margin: "2.5vh auto",
          }}
        />
        <p style={style}>
          <b>Process and reflections</b>
          <br />
          While the mechanical engineer of my team were busy working on wires,
          and arduinos, and 3d printers, me and Daisy decided to make our robot
          likable. We thought of giving him a backstory, we sew the “sock” that
          played the robot, and created the base for it. We painted it and we’re
          pretty happy with the outcome, however we still had some time left and
          we didn’t want to just sit it out. We decided to create some reward
          for children that play our game. Candy was off the list, so we
          handcrafted a couple of dozens of medals with cute, animal-themed
          stickers on them. The task might not seem like the hardest, or the
          work we’ve done is not the most impressive compared to the rest of the
          team. But seeing those children happy with the medals, I understood
          that no matter the task you get in a project, even if you’re unhappy
          and feel useless, you can always turn it around. I know that my group
          wouldn’t have done so great without mine and Daisy’s effort. We
          created an experience for those children, and it’s something
          memorable. I couldn’t be more happy about it. Next time when I work in
          a group, I will try even harder to consider other’s ideas and to see
          my own limitations. Only fully understanding my abilities gives me the
          opportunity of reaching my full potential within any project and
          within life itself.
          <br />
          <br />
        </p>
        <img
          src={require("../images/000027.JPG")}
          style={{ width: "80%", display: "block", margin: "5vh auto" }}
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Vue.js Conference",
    thing: ["technology"],
    letters: ["L", "J"],
    img: "vue.jpg",
    body: (
      <div style={div}>
        <img src={require("../images/vue.jpg")} />
        <p style={style}>
          <b>Life as a developer</b>
          <br />
          In 2017, when I was finishing my internship at Isaac, I was absolutely
          sure I will continue my career as a front-end developer. Life, school
          and the company itself have thrown me many different directions and
          right now I would call myself a full-stack hybrid app developer. I was
          lucky enough to be given a sneak peak of many professions in the
          software field, and the conclusions I took from this has led me where
          I am now.
          <br />
          <br />
          <b>Invitation to what?</b>
          <br />
          Mid-February 2019 I was invited to join the Vue.js conference held in
          Amsterdam. That came as a surprise to me, because at the time I had
          absolutely no experience with Vue, and didn’t even knew what it was. I
          was hesitating whether to accept the invite, but it would be stupid
          not to go for many reasons, such as networking. I knew that the venue
          holds several thousand people, and the speakers are inspiring creators
          of new frameworks.
          <br />
          <br />
          <b>"Meet the divas!"</b>
          <br />
          The conference was definitely a new experience for me. I have never
          seen so many bearded men in one room. It was exciting, fun, and so
          educational. It all felt like playful learning. One of the speakers
          was the creator of webpack, the to-go module bundler for web
          developers at the current time. His name is Sean Larkin and he is a
          hell of a speaker. Sean is kind of a diva in the software world, and
          his tweets can often be found in-between programming jokes. He
          explained wolfpack inside out, and I that day I came back home eager
          to try out all the new things that day.
          <br />
          <br />
          <b>Passing the knowledge</b>
          <br />
          After I came back to work, I had to explain briefly the lectures I was
          a part of during the conference. The event took place for few days,
          and a delegate from each day had to do a presentation during a “front
          enders' lunch”. I was happy with the way I was able to explain
          webpack, nuxt.js and many other things. I felt like my explanation was
          simple enough because I was focused during the lectures and truly
          understood what the creators of these technologies had in mind when
          they rolled out their products.
          <br />
          <br />
          <b>Reflection</b>
          <br />
          Going to this conference was an eye-opening experience. I have
          realized how fast is the software industry growing and how hard it is
          to be continuously up to date with the newest trends. I decided to
          attend more events like this in the future and learn at least one new
          framework or programming language every half a year. As for putting
          the knowledge I gained into use in the future, I am planning on
          exploring more of webpack and nuxt.js to discover its advantages in
          creating a webshop. Knowing these are helpful when creating stable
          content fast, I feel like this might be a way to go when I finally
          start working on a domain to sell my cameras.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "DIY Darkroom",
    thing: ["creativity", "global citizenship"],
    letters: ["D", "N"],
    img: "diydarkroom.jpg",
    body: (
      <div style={div}>
        <img src={require("../images/diydarkroom.jpg")} />
        <p style={style}>
          <b>Inspiration </b>
          <br />
          I’ve been passionate about film photography for over 10 years now. It
          all started when my uncle gave me his old Zenit 12XP, and I took a
          first roll of film on some family event. I fell in love with film ever
          since, and I have tried experimenting with it in many ways. For all
          those years I was hesitating from developing film by myself. It was
          mostly because darkrooms are still available to consumers in Poland,
          and a cost of developing and scanning 36 photos costs there around 2-3
          euros. Experimenting in my uncle’s darkroom at that time seemed like
          fun, but not necessary. He had a lot of equipment and was always
          trying to find alternative solutions to his problems, or tried new
          chemicals to get crazy effects on his photographs. He was the one who
          thought me to go for the unknown, to cook your roll of film in “soup”,
          and to always be on a lookout for an “ad-hoc” solutions, because they
          are fun and give a lot of satisfaction.
          <br />
          <br />
          <b>The struggle of film photographers </b>
          <br />
          When I moved to the Netherlands, I didn’t have time for photography
          for the first 2 years of my study. When I finally grabbed a camera,
          and brought my roll of film to City Photo to have it developed and
          scanned, I had a small heart attack. The price of this service in the
          Netherlands is up to 5 times more than what I got used to in Poland. I
          did use their services for a while, but I soon realized that I’m
          spending too much money monthly at City Photo. That’s when I
          remembered my uncle and his “off-road” darkroom. Together with a
          friend of mine we invested in our first set of chemicals to develop
          color negatives. The online instructions were all pointing us to the
          direction of buying very expensive darkroom equipment, but we were not
          going to settle. I knew that if developing film is a hustle for me, a
          student, then there must be more people like me in Eindhoven and in
          the world. Back in Poland it was easier to develop color negatives,
          and that’s why those darkrooms are still alive and well today, because
          they provide a high-quality service at affordable price. It’s
          something everyone is looking for, in every sector, whether it’s a spa
          or a restaurant.
          <br />
          <br />
          <b>Motivation and first steps </b>
          <br />
          Me and Mike decided to create a darkroom out of equipment you can buy
          at Hema and Action. The goal was not to only make film photography
          more accessible to us, we also wanted to show others that it can be
          fun, and can become as valuable part of the process as the actual
          moment you’re taking a picture. Having a darkroom and a freedom of
          processing your own film, gives you the opportunity of pushing,
          pulling and doing all sorts of manipulation on the negatives. It took
          us some time to get acquainted with the process enough to start
          hosting weekly meetups. After around 2 months of experimenting by
          ourselves, we invited first people over to develop the film at Mike’s
          house. It was a great success, and we saw people being happy with the
          results. With our own money we’ve invested in a professional scanner,
          and now we are capable of providing all services available at City
          Photo, for half the price, with more customization, and of much higher
          quality.
        </p>
        <img src={require("../images/diyd.jpg")} style={{ height: "55vh" }} />
        <p style={style}>
          <br />
          <br />
          <b>Experimenting </b>
          <br />
          The first experiment me and Mike did was to use the alternative
          process for C-41. Usually the development is done at around 38
          degrees, but since we didn’t have a professional heater we went for
          lower temperature. After that was a success, we’ve decided to push
          film, which means that the negative is soaking in the bleacher for
          longer than usual, to make the photos lighter. It was all great fun
          and we got interesting effects out of it. A friend of ours who is
          using our darkroom, has cooked his film in white wine and salt,
          creating crazy dissorted images. It’s something that got me inspired
          and I would love to try it myself. In the upcoming weeks I’m planning
          to create my own film soup, following this tutorial:
          https://shootitwithfilm.com/film-soup-tutorial/.
          <br />
          <br />
          <b>Impact </b>
          <br />
          The feedback we got was great, it was so rewarding to see that our
          assumptions were all correct. People in fact were bothered by the
          commercial prices, and the quality of scans provided by the
          “photography giants”. The fact that we added a fun factor, and gave
          our guest the freedom of being creative with their process, is making
          our darkroom more and more attractive to film enthusiasts. Now that I
          know what is bothering people about the state of film photography, I
          can do much better to improve the experience of the analog media
          enthusiasts.
          <br />
          <br />
          <b>Plans </b>
          <br />
          The next step I want to take is to extend my darkroom with black and
          white chemicals, and to create a workshop in which we’ll create our
          own chemicals with the use of cheap rose whine, vitamin c and freshly
          grounded coffee. I’m looking forward to see how my friends, and the
          darkroom ‘newcomers’ play around with those, and what kind of effects
          we’ll get out of it. It’s great to see that the service me and Mike
          provide makes people more creative and allows them to take more photos
          than they usually would, when they had to save their money for the
          pricey process of the negatives.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Reacting to Wolfpack",
    thing: ["technology"],
    letters: ["J"],
    img: "wolfpack.jpg",
    body: (
      <div style={div}>
        <img src={require("../images/it.jpg")} style={imgs} />
        <p style={style}>
          After the Vue.js conference I felt very inspired and excited to
          explore new frameworks for web development. It’s a subject that used
          to be very close to me, but being focused on my job as a mobile app
          developer I sort of forgotten about it. When my contract was finishing
          and it was time to look for a new job, I decided to put myself out of
          the comfort zone.
          <br />
          <br />
          Some people may say it takes a lot of guts to apply for a job without
          any experience in the given field, claiming you can learn anything on
          the go. That’s exactly what I did when I applied for a position as a
          React developer at WolfpackIT in Eindhoven. I went for an interview
          and was soon given an assignment, based on which I was supposed to be
          assessed later. They gave me a lot of freedom and I was able to do
          whatever I was comfortable with, as long as my work fits the
          requirements.
          <br />
          <br />
          I decided to challenge myself and develop a website using React. It
          was something I was quite familiar with, because on every-day basics I
          was creating apps using React Native, which is based on top of – you
          guessed – React. The problem is I have never actually written react in
          a non-mobile context and I have never deployed a single website that
          was running on React. I put in some time to fill in the gaps in my
          knowledge and I made sure I delivered the best web app possible to
          Wolfpack, both look-wise and code-wise.
          <br />
          <br />
          After looking at several React tutorials, I realized the code is very
          similar to what I already know, and it’s a matter of copy-adapt-paste
          to create usable solutions. I structured my page according to the
          official documentation and I made sure every bit of code I wrote was
          as efficient as it could be, with the use of design patterns and
          “dumb/smart” components. I was overall very happy with the code I
          delivered. The illustrations and icons used on the website were
          created in the hurry, but I’m still satisfied with presenting
          something that’s original. Below is the landing page of my web app. 
          <br />
          <br />
        </p>
        <img src={require("../images/wolfpack.jpg")} style={imgs} />
        <p style={style}>
          {/* add photo */}
          After delivering the project I was offered a job, for which I didn’t
          even apply for. Once again my life has taken a wild turn. Because the
          work I did was timed, I had shown to them I am capable of learning
          something new in a matter of hours. That has led to Wolfpack offering
          me a job as a Flutter developer. Flutter is a new framework used for
          hybrid mobile app development, owned by Google. I am very excited to
          become a part of their team and start learning something new. I am
          also very satisfied with the outcome of my work and that I was able to
          reach my goal of exploring new technology. I hope to keep this
          attitude in the years to come.
          <br />
          <br />
          Now that I have seen that trying out new tech is something you can do
          overnight; I have planned to learn about static site generators before
          I start my job at Wolfpack. One thing I have in mind is Gatsby, as
          I’ve heard several people mention it, at work and in my social circle.
          Maybe I will be able to learn more than one new programming language
          or framework every half a year! I’m looking forward to see where this
          approach will lead me. Getting a new job at Wolfpack is just a start.
          {/* add linkedin */}
        </p>
        <img style={imgs} src={require("../images/linked.jpg")} />
      </div>
    ),
  },
  {
    id: 5,
    title: "GATSBY",
    thing: ["technology"],
    letters: ["K", "L"],
    img: "wolfpack.jpg",
    body: (
      <div style={div}>
        <img src={require("../images/gatsbya.jpg")} style={imgs} />
        <p style={style}>
          <b>Why did I learn Gatsby.js?</b>
          <br />
          After getting my new job at Wolfpack I felt eager to learn more of the
          new, exciting stuff in the software world. I gave myself a challenge
          of learning something about a static site generator. I say something
          because at this point, I really didn’t know anything about it. All I
          knew is that Gatsby is the new hot thing in the industry, and if you
          want a fast one pager website that is the preferred solution at the
          moment. I also knew that Gatsby was using React, a framework I learned
          for my assessment project at Wolfpack, so this was supposed to be
          learning something new and exploring one subject a bit further.
          <br />
          <br />
          <b>The process</b>
          <br />
          I started off my process as I usually would – by reading the official
          documentation, which can be found here:
          https://www.gatsbyjs.org/docs/. I found the documentation to be very
          clear, but also vague in some sections. That’s why I decided to also
          follow a series of tutorials about Gatsby on Youtube, which can be
          found of LevelTuts channel. After all of this I finally understood
          what Gatsby is, and what does a static-site generator actually means.
          So, what it does really is it has everything ready for the user the
          moment he or she is requesting access to a page. Therefore, when the
          user navigates, or clicks something that requires for example an image
          to be loaded, in this scenario the image will be served immediately,
          because it’s “pre-fetched”. Having all this knowledge I was ready to
          set up a new project and start coding.
          <br />
          <br />
          Setting up the project can be a little scary, especially when I am
          starting to use a new language or a tool. A lot of operations are done
          using a console, and it doesn’t have the most friendly feel. Once
          again youtube was helpful, especially this tutorial:
          https://www.youtube.com/watch?v=b2H7fWhQcdE .
          <br />
          <br />
          After setting up the project I got to look at the structure of the
          files and started writing the code. It all came very natural because
          of the preparation I gave myself. Whenever I was unsure of something,
          I was looking at the official documentation of Gatbsy, and most of the
          times I could find answers to my problems there. After only a day I
          have created a simple website for a beauty salon, with photo gallery
          and sticky navigation. Developing with Gatsby is fast and it makes
          your website fast, so there are at least two great reasons for every
          web developer to try it out. The website (still under construction as
          this is a real, paid project) is temporarily hosted at:
          https://zen-perlman-c25e51.netlify.com .
          <br />
          <br />
        </p>
        <img src={require("../images/beautyb.jpg")} style={imgs} />

        <p style={style}>
          {/* add photo */}
          <b>Reflections</b>
          <br />
          In the future I am planning on using Gatsby for creating a simple
          single-page website, that can act as fronts for beauty salons,
          restaurants, playhouses and many others. The coding part is just
          nearly effortless, as simple and easy as programming gets. This
          project is owned by BeautyBar Kyara, and I will be carrying it out
          fully, including hosting it on an actual domain. I thing learning how
          to host a website built with Gatsby will be another useful thing to
          know. I can only hope this process will be as fast and easy as the
          rest of experience I had so far.
          <br />
          <br />I believe that static-site generators are a great new thing is
          web development world, and it’s important to hop on this train as soon
          as possible. In few years every website might be static-site
          generated, and my career won’t be so great if I don’t know what
          static-side means. Learning Gatsby was only the first step in becoming
          an aware, keeping up-to-date web developer. I hope to always know what
          people around me are talking about, and if I don’t, I will learn that!
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Organized chaos",
    thing: ["identity", "global citizenship"],
    letters: ["A", "B", "N"],
    img: "breaking.jpg",
    body: (
      <div style={div}>
        <img src={require("../images/chao.jpg")} style={imgs} />
        <p style={style}>
          <b>Intro</b>
          <br />
          Going in front of many people to make a presentation is not an easy
          thing. For me it all depends on the topic I’m supposed to discuss, but
          most of the times I feel quite ok with presenting in front of a crowd.
          I’ve been told many times that I present well, I think mostly because
          I always try to speak what I know and keep it short and simple.
          <br />
          <br />
          <b>Failed Groowmoments</b>
          <br />
          As a part of Future Solutions the whole minor was required to give a
          series of presentations about our project and the progress in each
          sprint. The task seemed simple, but still I struggled. I missed two of
          my presentations and had to give them after the deadline to limited
          amount of people. The feedback I was getting was mostly critical and I
          couldn’t understand why is nobody getting what I’m doing. The project
          I was doing for Future Solution is related to photography and
          everything I am passionate about in my life. I thought it will be easy
          to carry my message across, but my presentations were not landing. I
          realized that for the first time I am not explaining something that
          has already been done, but instead I have to in a way sell my own,
          personal creation, that only IS in my mind.
          <br />
          <br />
          <b>Time for change</b>
          <br />
          After two presentations I decided to change the way I was presenting.
          Instead of a very loose presentation I have decided to give my
          presentation some structure. Only some, as it still had to represent
          me, and I am in a way chaotic an “all over the place”. I decided to
          explain to my audience why am I doing the project, and then focus on
          the 2 products I was creating. The rest, the how’s and the groowtool
          kits could wait, as I felt this was more important at the given
          moment.
          <br />
          <br />
          <b>Process</b>
          <br />
          The presentation I gave was very personal. It explained my love to
          photography, which I have brought from my family house. For some time
          in my life I tried to make living out of taking photos, and it made me
          dislike digital photography because of the overall ‘quality over
          quantity’ feeling it was giving me. The product I am creating for my
          Future Solutions is supposed to make people plan their photos, which
          can result in better quality content for all of the people on social
          media and other online platforms. The world wide web is just trashed
          with the same selfie in billion versions, and it’s about the time
          someone does something about it. Couple of months ago I heard someone
          on TV saying to unfollow all social influencers and instead subscribe
          to true creators, artists, and people that you find inspiring. Doing
          this have changed the way I see the world now, and have filled my
          everyday life with a lot of positivity. I can’t recommend it enough,
          and I hope that my camera add-ons will contribute to the creative
          society of the world!
          <br />
          <br />
          <b>Feedback</b>
          <br />
          The feedback I got after presentation was exactly what I wanted to
          hear. I was very glad that I finally explained my vision to others in
          a clear and understandable way, while still being myself. I learned
          that my approach of speaking from the heart was always good, but some
          presentations require special preparation and a lot of concepting.
          Thinking this presentation through gave me a clearer image of myself
          and my intentions. In the long run I think this will make me a more
          self-aware human, which is something everyone needs and pursues. I
          will approach more presentations this way and I hope to find out even
          more about myself through it. And even though structure is not my best
          friend, it is necessary. I will invite more planning into my life,
          especially for my graduation project. This experience also showed me
          that not everyone will always get my intentions, and especially in a
          multicultural setting thing must be explained clearly. I think this
          will improve my presentation skills and the general attitude I have
          forwards working in groups.
        </p>
        <img style={imgs} src={require("../images/feed.jpg")} />
      </div>
    ),
  },
  {
    id: 7,
    title: "Mindtrack",
    thing: ["creativity", "entrepreneurship", "identity"],
    letters: ["C", "E", "I"],
    img: "mind.jpg",
    body: (
      <div style={div}>
        <img style={imgs} src={require("../images/mind.jpg")} />
        <p style={style}>
          <b>Intro</b>
          <br />
          As our project for the third sprint during the minor we we’re
          separated into groups to work on solution that could improve the lives
          of a given target group. I was working with four girls and we were
          assigned seniors as our target group. The challenge was to create
          something resolving around IoT – Internet of Things, that the seniors
          would actually find useful and usable.
          <br />
          <br />
          <b>My goals</b>
          <br />
          I wanted to learn how to work in a result-oriented team and respect
          everyone’s ideas. It has come to my attention lately that I got very
          used to working by myself, mostly due to the nature of my previous job
          at ISAAC. I worked alone there on an app and had total freedom. It’s
          making it hard for people around me be to be heard and I wanted to
          fight with that, and make feel everyone included.
          <br />
          <br />
          <b>Group brainstorming</b>
          <br />
          I didn’t go to the interviews, but I read carefully through what my
          teammates have learned from their visit to the seniors. We all agreed
          that most of our target group takes daily medications and we wanted to
          work with that. I was pretty stuck on the idea of a smart pill box,
          and I tried communicating that to my group. In the end I stepped down,
          because the girls came up with a much better and innovative solution.
          The fact that we all agreed and were respectful forwards each other
          have made my team very strong and motivated. We created an app called
          MindTrack, which combined with a smart pill box can monitor the state
          of user’s mental health by counting the times he forgets to take his
          pill. I worked on the app and the rest of the team worked on the
          prototype of the pill box, together with promotional thing such as
          posters and videos. We also worked together on the name and logo of
          the app, and the project went through couple of user interface
          designs.
          <br />
          <br />
        </p>
        <img
          style={{ height: "30vh" }}
          src={require("../images/logoTEC.png")}
        />
        <p>First logo</p>
        <img style={{ height: "30vh" }} src={require("../images/logo1.png")} />
        <p>Second logo</p>
        <p style={style}>
          <b>Reflection on my limitations</b>
          <br />
          I’m very happy that I understood my limitation, and that I was able to
          work around it. I can let others speak and feel included at the same
          time. Working in a group requires a lot of patience and open-mindness.
          I’d like all my future projects to be so effortless as this one, and I
          hope to keep this attitude. The experience I got from the Meaningful
          Challenge will surely be needed when I start my new job at Wolfpack,
          where I will have to become a team player. I have also learned that
          it’s always good to review alternative, or even completely abstract
          ideas, at least to get a new perspective. I will include and value
          other’s opinions when it comes to my projects, such as Breaking Film,
          or Future Solutions.
          <br />
          <br />
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VpsndPVJsOU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <p style={style}>
          <b>Showtime!</b>
          <br />
          We were supposed to present the outcome of our project on an expo. I
          would normally offer to create a presentation, or maybe a video of the
          app to present our work. We already had very nice posters created by
          Ilana. I decided to wait before offering to do the presentation to see
          how the rest of my group would like to express our process to the
          audience. We knew they would only stay around our station for a couple
          of minutes, so it couldn’t be anything too complicated. Estephany has
          decided to create an animation to explain and promote our product. I
          was very happy with it and the people that came around our station
          have complimented it many times. That has thought me that a visual aid
          such as a video or animation, can be a much more effective way of
          expressing one’s process and I hope to incorporate that in my future
          projects and ventures. Me and Mike would like to create a video to
          promote our Breaking Film group.
          <br />
          <br />
          <b>Feedback</b>
          <br />
          When the day of the expo came, I was quite excited to see how others
          view our project. Several people have pointed out that the app is
          great because its stakeholders are not only the people with memory
          loss problem, but also people around them, like their family and
          caretakers. The highlight of that day was seeing grandparents of our
          colleague intrigued with our app. They even asked if it’s on App
          Store! This experience has thought me that it’s always important to
          validate your solution in the appropriate context. The fact that we
          included our target group, by interviewing and showing them the
          outcome of our work, has proven to us, that we have crafted a solution
          to a problem that is often overseen. I plan on including target groups
          in my future projects, especially during the Future Solutions.
        </p>

        <img style={{ height: "55vh" }} src={require("../images/app1.jpg")} />
        <img style={{ height: "55vh" }} src={require("../images/app2.jpg")} />
        <img style={{ height: "55vh" }} src={require("../images/app3.jpg")} />
      </div>
    ),
  },
  {
    id: 8,
    title: "3D Printing + Photography",
    thing: ["creativity", "technology"],
    letters: ["F", "K"],
    img: "",
    body: (
      <div style={div}>
        <img style={imgs} src={require("../images/sprocket.jpg")} />

        <p style={style}>
          <b>Intro</b>
          <br />
          This project is about creating 3d printed addons for cameras, that
          require the photographer to think through their work before pressing
          the shutter button. I wanted to create 2 products: a 35-120mm film
          converter and a bokeh lens cap.
          <br />
          <br />
          <b>Global impact of my solution</b>
          <br />
          I think that social media is becoming more and more of a problem, not
          because of its additivity, but also because of the content that we see
          on it every day. The same girl, on the same selfie, promoting some
          diet supplements. It has been proven that this influence is very bad
          on the youth, causing them to have mental issues and eating disorders.
          The impact I wanted my project to have on the photographers is for
          them to think outside the box and plan ahead. The global change I hope
          to see is better content for ourselves and the future of this planet –
          our youth.
          <br />
          <br />
          <b>Personal goals</b>
          <br />
          3d modelling and game development were always on my bucket list, I
          think ever since I played the Sims when I was a kid. I was very
          excited to start a VR minor back in 2018, but unfortunately it wasn’t
          a great experience for me. Even although I am a programmer,
          programming for VR was expecting my brain to work on a level of
          abstraction that simply wasn’t achievable for me. I quit the minor
          half way through. I knew that VR will not become my career path ever
          since.
          <br />
          <br />
          The Embrace Technology minor really encouraged me to try my best at 3
          modelling again. I did enjoy that part of my previous minor, but I
          could never focus enough on it because I was busy keeping up with the
          programming assignments. I decided to incorporate 3d modelling and 3d
          printing with photography as my Future Solutions.
          <br />
          <br />
          <b>Process</b>
          <br />I first created the film converter, based on the measurements of
          standard 35mm film roll and a 120mm take up spool. The spool required
          some creativity, to make sure that the film is stretched. In the end
          it was a matter of creating few basic shapes and combining them, or
          cutting parts away from them. I had to learn how to do all of this in
          Blender, and I thought myself that through watching YouTube tutorials.
        </p>
        <img style={imgs} src={require("../images/cam.jpg")} />
        <p>Film converter prototype</p>
        <p style={style}>
          <br />
          <br />
          The lens cap was more complicated to create, and after printing 9
          prototypes I still haven’t found a perfect solution. I first thought
          of creating a clip-on lens cap, but the clamps were merged forever
          with its support material. They don’t work best and they make the lens
          cap loose. Next time I printed 2 lens caps; the holes didn’t appear
          because I didn’t change a 2d plane into 3d object properly. Now I know
          how to change an SVG into a 3-dimensional object in Blender and cut a
          hole out in universal lens cap. The next step is to figure out the
          exact dimensions of the hole to give that curved bokeh effect. I’m
          going to do that by printing several lens caps with different sizes of
          star and heart holes, that fit my DSLR.
          <br />
          <br />
        </p>
        <img style={{ height: "55vh" }} src={require("../images/cam1.jpg")} />
        <img style={{ height: "55vh" }} src={require("../images/cam2.jpg")} />
        <p>Lens caps prototypes</p>
        <p style={style}>
          <b>Reflections</b>
          <br />
          Experimenting with 3d modelling again was very fun and educational.
          Next time I fail at something, I will try it again in a context that I
          am passionate about – just the way I did so with this project by
          combining it with photography. This way I was much more motivated.
          <br />
          <br />I think that 3d printing is a revolutionary technology, and
          there is infinity of things that can be done with it. I want to create
          more fun products like this, that I could potentially use for my
          AnalogSpace webshop. I’m already thinking of 620mm-35mm converter for
          my Anscoflex II.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Breaking Film",
    thing: ["global citizenship", "entrepreneurship"],
    letters: ["O", "G", "H"],
    img: "breaking.png",
    body: (
      <div style={div}>
        <img style={imgs} src={require("../images/breaking.jpg")} />
        <p style={style}>
          Me and my friend Mike have decided to share the knowledge we got doing
          DIY Darkroom. We created a secret Facebook group and invited friends
          and the people I sold cameras to. We understood that keeping the group
          secret will mean we will not attract as many people, but that seemed
          like the best option as we were still learning at the time.
          <br />
          <br />
          We started hosting weekly meetings at Mike’s house, where we developed
          film for others, scanned it, and thought our guest how to do it on
          their own. Me and Mike would switch turns, and he would help me from
          time to time with mixing the chemicals. We have also split roles with
          post processing the negatives: I dry and cut them, Mike scans them
          into .RAW files and then I adjust the photos in Adobe Lightroom. It’s
          great to be in it together and have each other's back. Our team has
          proven to be successful, as our Breaking Film group continued to grow
          with each week. Now we plan together on opening up Analog Space, a
          place where we would combine the open darkroom project with selling
          and fixing antique cameras.
          <br />
          <br />
          After our group started growing, we realised that the equipment we had
          wasn’t enough. In a standard JOBO and Kaiser tanks we could develop 3
          rolls of film at one time. If we were having 10 people over on Friday
          that would mean sitting there for 4 to 5 hours, if we count the beer
          time. We decided to invest in a larger developing tank. This also
          means that we had to buy extra chemicals and bottles, as our current
          set up was for 1l of solution. Now we need 2 liters to fill up the new
          tank. With this situation I learned to always plan ahead and wonder
          what could go wrong. I didn’t have to wait long to put this knowledge
          into use, because soon we decided to expand our services with black
          and white negative process. It also had a snowball effect, and
          required extra preparations and equipment, but we were prepared for
          that. Next step we want to take is to put my enlarger into use, but
          before we do that we will surely think it through and out.
        </p>
        <img
          style={{ width: "50%", display: "block", margin: "5vh 0" }}
          src={require("../images/film.jpg")}
        />
        <p>
          Having all those people over have had a massive influence on me and
          Mike. Everyone is creative and have an idea for a fun experiment with
          film. We are trying to keep people active on the group, and making
          them feel like their opinions matter. That's why Mike is posting
          surveys to see what people want to do, we also let them vote on ideas.
          One happy guest invites another one, and hopefully we will turn them
          into official customers soon with the Analog Space. People withing the
          Breaking Film group have been very supportive and they let us into
          their network. We've met people who enlarge negatives to the size of a
          billboard and the ony person in the Netherlands who process super 8
          movies. Now me and Mike are looking for a place to host Analog Space,
          and we are hoping to collaborate with either the Hub, Dynamo or Plan
          B. I'm hoping that my group will grow even more and I will meet more
          people, so that we can all work together to benefit.
        </p>

        <img
          style={{ width: "50%", display: "block", margin: "5vh auto" }}
          src={require("../images/snip.jpg")}
        />
      </div>
    ),
  },
  {
    id: 10,
    title: "Expert Goals",
    thing: [],
    letters: ["C", "F", "K"],
    body: (
      <div style={div}>
        <img style={imgs} src={require("../images/exp.jpg")} />
        <p style={style}>
          <b>
            I want to establish my own business and pave the path to graduate at
            this startup.
          </b>
          <br />
          <br />
          <b>SMART:</b>
          <br /> Specific: I want to create a business which will include an
          open darkroom, a front to sell my cameras and a webshop with different
          sorts of “analog” products, including the outcome of this project.
          <br />
          Measurable: The goal will be achieved once the company is made legal,
          me and Mike have signed a partnership agreement and I got a green
          light to graduate while working on my webshop. <br />
          Achievable: To make this big goal achievable I will divide it into
          several small steps and keep track of it on a SCRUM board.
          <br /> Relevant: Being the boss of myself is what drives me and gets
          me up in the morning. Starting my own business couldn’t be more
          relevant to who I am and what I want to represent.
          <br /> Time: I will put in time spent at Fontys but also the time me
          and Mike spend together to develop our company.
          <br />
          <br />
          I wanted to prepare myself for graduating at my own company, because I
          ‘ve had a job as software developer for over 2 years now and I
          couldn’t imagine going back to intern pay for 40 hours a week. I want
          to create something of myself and that’s why I’m going to establish
          Analog Space. Having this as an expert goal has been a great
          introduction to this long, complicated process. Now I know all the
          documents and steps I must take to have a legal webshop in the
          Netherlands. I’ve also learned that I must apply for the student
          entrepreneur status at Fontys, in order to get my project approved by
          the exam board. Last byt not least, I had to create a business model
          canvas, partnership agreement and business plan together with Mike, my
          business partner. Through this process I’ve learned that establishing
          my business and making it valid for my graduation will not be easy.
          There is still a lot of work to be done, and several people whose help
          is needed, like accountants and a notary. I decided not to let it
          discourage me, but instead plan ahead with all this knowledge I
          already got during Future Solutions. I postponed mu graduation project
          till November 2019, to make sure I’m done with the necessary paperwork
          beforehand. This whole experience has thought me that starting your
          own business can be complicated, and can create a snowball effect.
          There are a lot of things that must be accounted for, and it requires
          a lot of time and dedication. It’s important to always think about the
          next problem that will arise due to the chosen solution. Just the way
          I must comply with RODO on my webshop, and take care of all that
          privacy statements.
          <br />
          <br />
          <br />
          <br />
          <b>
            {" "}
            I want to learn how to manage my time, so that the goals I set are
            achieved.
          </b>{" "}
          <br />
          <br />
          <br />
          <b>SMART:</b> <br />
          Specific: I will split the big goals into small steps and organize
          them into “sprints”. Each sprint will be given a time frame. The small
          steps will be put onto a scrum board to always be able to look and
          evaluate where I am now.
          <br /> Measurable: SCRUM board will be a visual aid anyone in the
          minor can look at and see where I am with my project at the moment.
          <br /> Achievable: This is achievable to anyone on the planet, just a
          bit harder for me as I love chaos. <br />
          Relevant: This expert goal is very relevant as it will help me achieve
          what I set as a goal for my future solutions. This will benefit me in
          my life as well.
          <br /> Time: As soon as possible.
          <br />
          <br />
          I decided to make time management one of my expert goals because it’s
          something I’ve always had trouble with in my life. I tend to be very
          spontaneous and use my instincts whenever I can. This has caused me to
          miss many deadlines before and I decided to become more structured
          during the time allocated for Future Solutions. I created a SCRUM
          board that everyone could see in the PULSED room, and made sure to
          update it every time I was at school. The goals I had in mind for this
          project were split into 2 categories: Business and Product. These were
          split down into smaller tasks, like creating business canvas model, or
          printing first lens cap prototype. The visual aid was very helpful
          throughout the project and made me realize when I was jumping the gun,
          and where I was falling behind. At some point of the project the
          business part took over and I didn’t focus enough on the prototypes. I
          could see that on the SCRUM board. This project has thought me that
          structure and organization are very important, and even though they
          are not my strengths, it is crucial that I work on them, especially
          before staring my own business. I will try not to be late to
          appointments all the time and maybe even try to organize my own house
          a bit more, not to drown in laundry ever week. Future Solutions and
          time management have made me realize many faults in my life and I am
          eager to work on them.
          <br />
          <br /> <br />
          <br />
          <b>
            I want to find out how and if an “add-on” for a camera can alter a
            picture and create reproducible, predictable effects.
          </b>
          <br />
          <br />
          <b>SMART:</b>
          <br /> Specific: I will be working on this by myself in the Pulsed
          room, using the 3d printers and the fillament provided to us. The
          add-ons will be created for both cameras with lenses and the “point
          and shoot” cameras. First of all I want to create a customizable lens
          cap that will create a modified bokeh effect. <br />
          Measurable: The goal is to achieve a strange effect on the
          photographs, that are reproducable. The add-on has to work both on
          film and digital cameras. <br />
          Achievable: I can achieve this help with a lot of persistance,
          creativity and a couple of youtube tutorials. <br />
          Relevant: It is closely related to my bigger goal – starting a
          business that will keep film photography a live. I also want to
          develop in the field of 3d printing, and find out as much as I can
          about the needs and problems of people interested in photography.{" "}
          <br />
          Time: This needs to be completed by the time of the 3rd Groow Moment.
          The work is divided into small tasks and organised on a SCRUM board.
          <br />
          <br />I chose this as my expert goal because I wanted to really
          challenge myself. Couple of months ago I failed a VR minor, where we
          learned all about 3d modelling. I thought I will never do it again,
          but seeing the printers in the Pulsed room, I decide to give it ago,
          as it would be stupid not to try. After first couple of prints I saw
          that I am not very motivated and creative. That’s why I decided to
          combine the 3d printing technology with something I am very passionate
          about – photography. Throughout the whole project I was very creative
          and persistent. I created at least 10 prototypes for both film
          converter and lens cap, constantly gathering feedback from my testers
          and adjusting my models. I am very happy with the outcomes of this
          project. It made me realize just how many things I gave up on in my
          life due to one failure. Now I will try take things that are
          challenging to me and put them in a context that is familiar to me,
          like photography. This kept me motivated all the way through.
        </p>
      </div>
    ),
  },
]
