import React, {useEffect} from 'react';
import GitHubButton from 'react-github-btn';

import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import CrossPlatformSVG from '../../static/img/homepage/cross-platform.svg';
import {setupDissectionAnimation} from './animations/_dissectionAnimation';
import {setupHeaderAnimations} from './animations/_headerAnimation';

const textContent = {
  intro: `
是不是每次經驗系統永遠都只能看文字聊天的活躍度?
而偏偏你又是那個在語音很會講話，但不怎麼打字的那個?
<br/><br/>
如果你有以上需求的話
試試我們這隻機器人吧，
獨創的語音經驗系統，讓你在語音頻道裡的活躍都被記錄下來。
  `,
  WTFisthis: `
最棒的discord小遊戲
包括知識王，21點
結合代幣系統，達成最棒的小遊戲
使用代幣與對手賭注來讓遊戲更佳刺激!
知識王有超過100個題目，讓你玩不膩!!!
    `,
  nativeCode: `
獨創的扭蛋系統，讓你的Discord伺服器不再只是抽獎
可以根據成員的活耀程度及每日簽到
來更好的讓你的伺服器更加活
而代幣商店也是根據成員活躍量來給予代幣
來讓使用者自己購買身分組或是獎品!!!
  `,
  codeExample: `
import React from 'react';
import {Text, View} from 'react-native';
import {Header} from './Header';
import {heading} from './Typography';

const WelcomeScreen = () => (
  <View>
    <Header title="Welcome to React Native"/>
    <Text style={heading}>Step One</Text>
    <Text>
      Edit App.js to change this screen and turn it
      into your app.
    </Text>
    <Text style={heading}>See Your Changes</Text>
    <Text>
      Press Cmd + R inside the simulator to reload
      your app’s code.
    </Text>
    <Text style={heading}>Debug</Text>
    <Text>
      Press Cmd + M or Shake your device to open the
      React Native Debug Menu.
    </Text>
    <Text style={heading}>Learn</Text>
    <Text>
      Read the docs to discover what to do next:
    </Text>
   </View>
);
  `,
  forEveryone: `
  超過10種類別，30種指令，並且全部都是採用斜線命令設計<br/>
  不怕忘記指令名稱，還有專業的文檔網站，不再擔心不會使用指令<br/>
  除此之外，我們還有Discord支援伺服器<br/>遇到問題也可以到這裡詢問，都會有專人為你解答<br/><br/>
  `,
  crossPlatform: `
React components wrap existing native code and interact with native APIs via
React’s declarative UI paradigm and JavaScript. This enables native app development
for whole new teams of developers, and can let existing native teams work much faster.
  `,
  fastRefresh: `
<strong>See your changes as soon as you save.</strong> With the power of JavaScript,
React Native lets you iterate at lightning speed. No more waiting for native builds to finish.
Save, see, repeat.
  `,
  talks: `
Members of the React Native team frequently speak at various conferences.
<br/><br/>
You can follow the latest news from the React Native team on Twitter
  `,
};

function Heading({text}) {
  return <h2 className="Heading">{text}</h2>;
}

function ActionButton({href, type = 'primary', target, children}) {
  return (
    <a className={`ActionButton ${type}`} href={href} target={target}>
      {children}
    </a>
  );
}

function TextColumn({title, text, moreContent}) {
  return (
    <>
      <Heading text={title} />
      <div dangerouslySetInnerHTML={{__html: text}} />
      {moreContent}
    </>
  );
}

function HomeCallToAction() {
  return (
    <>
      <ActionButton
        type="primary"
        href="https://dsc.gg/mhcat"
        target="_self">
        邀請我
      </ActionButton>
      <ActionButton
        type="secondary"
        href={useBaseUrl('docs/getting_started')}
        target="_self">
        教學文檔
      </ActionButton>
    </>
  );
}

function TwitterButton({accountName}) {
  return (
    <a
      href={`https://twitter.com/intent/follow?screen_name=${accountName}&region=follow_link`}
      className="twitter-follow-button">
      <div className="icon" />
      Follow @{accountName}
    </a>
  );
}

function GitHubStarButton() {
  return (
    <div className="github-button">
      <GitHubButton
        href="https://github.com/facebook/react-native"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star facebook/react-native on GitHub">
        Star
      </GitHubButton>
    </div>
  );
}

function Section({
  element = 'section',
  children,
  className,
  background = 'Dark',
}) {
  const El = element;
  return <El className={`Section ${className} ${background}`}>{children}</El>;
}

function TwoColumns({columnOne, columnTwo, reverse}) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function ScreenRect({className, fill, stroke}) {
  return (
    <rect
      className={`screen ${className || ''}`}
      rx="3%"
      width="180"
      height="300"
      x="-90"
      y="-150"
      fill={fill}
      stroke={stroke}
    />
  );
}


function HeaderHero() {
  return (
    <Section background="dark" className="HeaderHero">
      <div className="buttons">
            </div>
      <TwoColumns
        reverse
        columnTwo={
          <>
            <h1 className="title">MHCAT</h1>
            <p className="tagline">打造專屬於你的Discord伺服器&nbsp;</p>
            <div className="buttons">
            </div>
          </>
        }
      />
    </Section>
  );
}

function NativeApps() {
  return (
    <Section className="NativeApps" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="獨創的語音經驗系統"
            text={textContent.intro}
          />
        }
        columnTwo={<img alt="" src={useBaseUrl('img/dsa.png')} />}
      />
    </Section>
  );
}

function NativeCode() {
  return (
    <Section className="NativeCode" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="扭蛋系統及代幣商店"
            text={textContent.nativeCode}
          />
        }
        columnTwo={<img alt="" src={useBaseUrl('img/Screenshot 2022-08-13 121804.png')} />}

      />
    </Section>  
  );
}

function Iloveuuarehateme() {
  return (
    <Section className="NativeApps" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="更多更多的小遊戲"
            text={textContent.intro}
          />
        }
        columnTwo={<img alt="" src={useBaseUrl('img/Screenshot 2022-08-13 122336.png')} />}
      />
    </Section>
  );
}

function NativeDevelopment() {
  return (
    <Section className="NativeDevelopment" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="大量的功能"
            text={textContent.forEveryone}
          />
        }
        columnTwo={
          <div className="dissection">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <img
                alt=""
                key={i}
                src={useBaseUrl(`img/homepage/dissection/${i}.png`)}
              />
            ))}
          </div>
        }
      />
    </Section>
  );
}

function CrossPlatform() {
  return (
    <Section className="CrossPlatform" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Seamless Cross-Platform"
            text={textContent.crossPlatform}
          />
        }
        columnTwo={<CrossPlatformSVG />}
      />
    </Section>
  );
}

function FastRefresh() {
  return (
    <Section className="FastRefresh" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn title="Fast Refresh" text={textContent.fastRefresh} />
        }
        columnTwo={
          <video
            muted
            autoPlay
            loop
            playsInline
            src={useBaseUrl(`img/homepage/ReactRefresh.mp4`)}
          />
        }
      />
    </Section>
  );
}

function VideoContent() {
  return (
    <div>
      <Section className="VideoContent" background="tint">
        <br />
        <TwoColumns
          columnOne={
            <TextColumn
              title="Talks and Videos"
              text={textContent.talks}
              moreContent={<TwitterButton accountName="reactnative" />}
            />
          }
          columnTwo={
            <div className="vidWrapper">
              <iframe
                src="https://www.youtube.com/embed/NCAY0HIfrwc"
                title="Mobile Innovation with React Native, ComponentKit, and Litho"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          }
        />
        <br />
        <TwoColumns
          columnOne={
            <>
              <p>
                The{' '}
                <a href="https://opensource.facebook.com/">
                  Meta Open Source team
                </a>{' '}
                has put together a short overview of React Native, where they
                explained the project in beginner's terms.
              </p>
            </>
          }
          columnTwo={
            <div className="vidWrapper">
              <iframe
                src="https://www.youtube.com/embed/wUDeLT6WXnQ"
                title="Explain Like I'm 5: React Native"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          }
        />
      </Section>
    </div>
  );
}

/* Community */

function AppList() {
  const {siteConfig} = useDocusaurusContext();
  const apps = siteConfig.customFields.users.filter(app => app.pinned);

  return (
    <ul className="AppList">
      {apps.map((app, i) => {
        const imgSource = !app.icon.startsWith('http')
          ? useBaseUrl('img/showcase/' + app.icon)
          : app.icon;
        return (
          <li key={i} className="item">
            {app.infoLink ? (
              <a href={app.infoLink}>
                <img src={imgSource} alt={app.name} />
              </a>
            ) : (
              <img src={imgSource} alt={app.name} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Community() {
  return (
    <Section className="Community" background="light">
      <div className="content">
        <Heading text="Facebook Supported, Community Driven" />
        <TwoColumns
          columnOne={
            <>
              <p className="firstP">
                <img src={useBaseUrl(`img/homepage/fb-logo.svg`)} alt="" />
                <span>
                  Facebook released React Native in 2015 and has been
                  maintaining it ever since.
                </span>
              </p>
              <p>
                In 2018, React Native had the{' '}
                <a href="https://octoverse.github.com/2018/projects#repositories">
                  2nd highest
                </a>{' '}
                number of contributors for any repository in GitHub. Today,
                React Native is supported by contributions from individuals and
                companies around the world including{' '}
                <span>
                  <a href="https://callstack.com/">Callstack</a>
                </span>
                ,{' '}
                <span>
                  <a href="https://expo.io/">Expo</a>
                </span>
                , <a href="https://infinite.red/">Infinite Red</a>,{' '}
                <a href="https://www.microsoft.com/">Microsoft</a> and{' '}
                <a href="https://swmansion.com/">Software Mansion</a>.
              </p>
              <p>
                Our community is always shipping exciting new projects and
                exploring platforms beyond Android and iOS with repos like{' '}
                <span>
                  <a href="https://github.com/microsoft/react-native-windows#readme">
                    React Native Windows
                  </a>
                </span>
                ,{' '}
                <a href="https://github.com/microsoft/react-native-macos#readme">
                  React Native macOS
                </a>{' '}
                and{' '}
                <a href="https://github.com/necolas/react-native-web#readme">
                  React Native Web
                </a>
                .
              </p>
            </>
          }
          columnTwo={
            <>
              <p>
                React Native is being used in thousands of apps, but it's likely
                you've already used it in one of these apps:
              </p>
              <AppList />
              <p>
                and <a href={useBaseUrl(`showcase`)}>many more</a>.
              </p>
            </>
          }
        />
      </div>
    </Section>
  );
}

function GetStarted() {
  return (
    <Section className="GetStarted" background="dark">
      <div className="content">
        <Heading text="給我一次機會" />
        <ol className="steps">
            <p>或許讀完以上介紹後，你依然沒有心動!<br/>但是，給我一次機會，保證讓你驚豔</p>
            <HomeCallToAction />
        </ol>
      </div>
    </Section>
  );
}

const useHomePageAnimations = () => {
  useEffect(() => setupHeaderAnimations(), []);
  useEffect(() => setupDissectionAnimation(), []);
};

const Index = () => {
  useHomePageAnimations();
  return (
    <Layout
      description="使用MHCAT以最簡單及快速的方式打造你的Discord伺服器"
      wrapperClassName="homepage">
      <Head>
        <title>MHCAT</title>
        <meta
          property="og:title"
          content="MHCAT帶給你更好的discord體驗"
        />
        <meta
          property="twitter:title"
          content="MHCAT帶給你更好的discord體驗"
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3633235696268475"
        crossorigin="anonymous"></script>
      </Head>
      <HeaderHero />
      <NativeApps />
      <NativeCode />
      <Iloveuuarehateme />
      <NativeDevelopment />
      <GetStarted />
    </Layout>
  );
};

export default Index;
