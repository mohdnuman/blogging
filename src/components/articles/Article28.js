import React, { Component } from "react";
import Container from "@mui/material/Container";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { Telegram, Twitter } from "@mui/icons-material";

class Article28 extends Component {
  render() {
    return (
      <div align="center">
        <Container
          maxWidth="md"
          sx={{ display: "inline-block", padding: "4vh", fontSize: "1.3rem" }}
        >
          <span className="articles-section-heading">ARTICLES</span>
          <h1 className="playfair-heading-lg">
            Al Qadr (Divine Decree, Predestination, Fate)
          </h1>
          <img
            src={"./article28.jpg"}
            alt="article28"
            className="image-main-page-article-4"
            sx={{ height: 10 }}
          />
          <div className="body-text">
            <p>
              Some Muslims really have a hard time understanding ’Qadr’ because
              they think it is contradicting the free will. They say if
              everything is pre-written and decreed then how can there be any
              choice! Well, such people have misunderstood what Qadr actually
              means.
            </p>
            <p>
              Al Qadr means that Allāh has written everything that is going to
              happen till Qiyāmah (written in Al Lawh al-Mahfūz). And believing
              in Qadr is one of the pillars of Īmān (Faith).
            </p>
            <p>
              The Messenger of Allāh ﷺ said : "The first thing Allāh created was
              the pen. He told it to write and when it asked Him what it should
              write He told it to write what was decreed, so it wrote what had
              taken place and what would take place till Qiyāmah."
            </p>
            <p>
              One of the names of Allāh is Al 'Alīm, The All Knowing. He is the
              One Whose Knowledge encompasses all things, seen and unseen,
              secret and open, everything that is inevitable or impossible or
              possible, in heaven and on earth, the past, the present and the
              future. Nothing whatsoever is hidden from Him.
            </p>
            <p>Sūrah Al-Hajj 22:70</p>
            <p>
              اَلَمْ تَعْلَمْ اَنَّ اللّٰهَ يَعْلَمُ مَا فِي السَّمَآءِ
              وَالْاَرْضِ ؕ اِنَّ ذٰلِكَ فِيْ كِتٰبٍ ؕ اِنَّ ذٰلِكَ عَلَي
              اللّٰهِ يَسِيْرٌ
            </p>
            <p>
              Do you not know that Allāh knows what is in the heaven and earth?
              Indeed, that is in a Record. Indeed that, for Allāh, is easy.
            </p>
            <p>
              The concept of Qadr is quite easy to understand. I remember a
              friend of mine asking me ”Akhi, Allāh has already written what we
              should do right? And I said to him, no! Allāh has not written what
              you should do, instead He has written what ’you will do’”
            </p>
            <p>let's give an example</p>
            <p>
              Suppose your name is Abdullāh, you are on your way to somewhere in
              your car and you find two turns in front of you, a right turn and
              a left turn and you make a right turn just because you felt like
              it or whatever the reason might be but it was your choice.
            </p>
            <p>
              Allāh, who is Al 'Alīm (The All Knowing) knew what you would do,
              so Allāh in advance wrote in Lahw al-Mahfūz that “Abdullāh will
              reach this particular place and he will make a right turn”
            </p>
            <p>
              If you understood this example it will be clear that, all your
              choices are based on free will but Allāh in His Infinite Knowledge
              has already written what your choices will be.
            </p>
            <p>
              No matter what you do, whether you are at a restaurant ordering
              something to eat or you are choosing a life partner, it's all your
              choice and as Allāh already knows what you'd choose, He has
              already written what you would order at that restaurant and whom
              you'd choose as your life partner.
            </p>
            <p>It's that simple.</p>
            <p>
              Share it With Your Friends And Family
              <br />
              <br />
              <a
                className="black-color-a"
                href="whatsapp://send?text= https://www.exposingdajjal.com/article28"
                data-action="share/whatsapp/share"
                target="_blank"
                style={{ marginTop: "10vh", marginRight: "3vh" }}
              >
                <WhatsappIcon />
              </a>
              <a
                className="black-color-a"
                href="https://t.me/share/url?url= https://www.exposingdajjal.com/article28"
                style={{ marginTop: "10vh", marginRight: "3vh" }}
              >
                <Telegram />
              </a>
              <a
                href="https://twitter.com/share"
                class="black-color-a"
                data-text="Check out this article from Exposing Dajjal"
                data-url="https://www.exposingdajjal.com/article28"
                data-show-count="false"
              >
                <Twitter />
              </a>
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Article28;
