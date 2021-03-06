import { Typography } from 'antd';
import React, { useState } from 'react';
import {
  Fa500Px,
  FaAdobe,
  FaAdversal,
  FaAirbnb,
  FaAlipay,
  FaAmazon,
  FaAmazonPay,
  FaApple,
  FaAppStoreIos,
  FaBehanceSquare,
  FaGoogle,
  FaInstagramSquare,
  FaLaugh,
  FaMagento,
  FaOpera,
  FaYinYang
} from 'react-icons/fa';
import { Helmet } from 'umi';
import packageInfo from '../config';
import {
  Api,
  Code,
  Code0,
  Code1,
  Code2,
  Code3,
  Code4,
  Footer
} from './components';
import './index.less';
import Intro from './intro';
// import Background from 'smart-background';
import Background from './package';
const { Title, Paragraph, Text, Link } = Typography;

const images = [
  'https://cdn.dribbble.com/users/3550736/screenshots/16244010/media/cead570591b124ed91c34dc9958f315c.jpg?compress=1&resize=1200x900',
  'https://cdn.dribbble.com/users/3550736/screenshots/16244010/media/f03f7960c2d88f6fec3b43b9e1b5935b.jpg?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/4666085/screenshots/16244479/media/d3d5b6d3e546fa17170b5daa46de375e.png?compress=1&resize=1200x900',
  'https://cdn.dribbble.com/users/4588540/screenshots/16243929/media/430745b49a20f462bbfbdabc77b542f9.png?compress=1&resize=1200x900',
  'https://cdn.dribbble.com/users/4835348/screenshots/16229715/media/5c68b55f75b04e96ff6f110ab2617996.png?compress=1&resize=800x600',
  'https://cdn.dribbble.com/users/323673/screenshots/16223702/media/60b90d6e0f673e0ccee30056b8ae83d2.png?compress=1&resize=1200x900',
  'https://cdn.dribbble.com/users/427857/screenshots/16157651/media/d8739d9147bb28ae6376e2206f67ba60.png?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/427857/screenshots/16157651/media/18fcbf0c65cb47c14f633b162042cc65.png?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/427857/screenshots/16157651/media/ecd0b4a299aabb66c8358b1051a139cd.png?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/6532302/screenshots/16244413/media/c554d3e5bcf8c680ae56852b1b290fa7.jpg?compress=1&resize=1200x900',
  'https://cdn.dribbble.com/users/2192147/screenshots/16242676/media/20f56e6b73bfc7ee4b9d9143f6449ad3.jpg?compress=1&resize=1200x900',
  'https://cdn.dribbble.com/users/730703/screenshots/16207835/media/a9ad81cbcc73c87629471f4546828f2c.gif',
  'https://cdn.dribbble.com/users/86429/screenshots/16241756/media/2d6331f16965e1ee4453b197e4d7f442.jpg?compress=1&resize=800x600',
  'https://cdn.dribbble.com/users/5462867/screenshots/16165195/media/2a7203b0e3d1bbca91be7565d25d3f39.jpg?compress=1&resize=1200x900',
  'https://cdn.dribbble.com/users/500242/screenshots/15428350/media/7b8a007e88d9050fe3d52c3625d2ff24.gif',
];

const icons = [
  <Fa500Px />,
  <FaApple />,
  <FaAdobe />,
  <FaAdversal />,
  <FaAirbnb />,
  <FaAlipay />,
  <FaAmazonPay />,
  <FaAmazon />,
  <FaAppStoreIos />,
  <FaBehanceSquare />,
  <FaMagento />,
  <FaGoogle />,
  <FaInstagramSquare />,
  <FaOpera />,
];

const icons1 = [
  <Fa500Px />,
  <FaApple />,
  <FaAdobe />,
  <FaAdversal />,
  <FaAirbnb />,
];

const dots = [
  {
    x: '-10%',
    y: '-20%',
    size: 200,
    background: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
    borderRadius: '50%',
  },
  {
    x: '60%',
    y: '40%',
    size: 500,
    background:
      'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
    borderRadius: '50%',
  },
  {
    x: '-30%',
    y: '50%',
    size: 450,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
  },
];

interface IProps {}
const Index: React.FunctionComponent<IProps> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCtrlB = () => {
    setCollapsed(!collapsed);
  };
  console.log('packageInfo',packageInfo)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Smart Background ?????? An React Component Automatically generate the
          background
        </title>
        <link rel="canonical" href={packageInfo.homePageUrl} />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/logo.png" />
      </Helmet>
      <div className="App">
        <a
          className="github"
          href={packageInfo.homePageUrl}
          target="_blank"
        ></a>

        <Background
          style={{ width: '100%', height: '500px' }}
          underlayColor="#0252D9"
          symbolsStyle={{
            color: '#000',
            opacity: '0.3',
          }}
          animation={{ type: 'top', speed: 5 }}
          gap={20}
          symbols={icons}
        >
          <a
            className="github"
            href={packageInfo.homePageUrl}
            style={{
              backgroundImage: `url(https://img.shields.io/github/stars/yuanguandong/${packageInfo.packageName}?style=social)`,
            }}
            target="_blank"
          ></a>
        </Background>

        <div className="wrap">
          <div className="alignCenter">
            <div className="">
              {/* <img className="logoImage" src={Logo} alt="react-keyevent" /> */}
              <div className="logo" style={{ color: '#fff' }}>
                {packageInfo.symbol}
              </div>
              <span className="name" style={{ color: '#fff' }}>
                Smart Background
              </span>
            </div>
          </div>
          <Intro />
          <div className="container">
            <Background
              underlayColor="#f00"
              animation={{ type: 'bottom', speed: 5 }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <FaLaugh style={{ color: '#fff', fontSize: 120 }} />
                <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>
                  JUST DO IT
                </h1>
              </div>
            </Background>
          </div>
          {/* <Title level={2}>Easy To Use ????????????</Title> */}
          <Paragraph>???????????????????????????</Paragraph>
          <Code content={Code0} />
          <Title level={2}>Animation ??????</Title>
          <Paragraph>????????????????????????????????????????????????????????????</Paragraph>
          <Paragraph>GPU rendering, Does not occupy the js process</Paragraph>
          <Paragraph>GPU ??????, ???????????????javascript??????</Paragraph>
          <div className="container">
            <Background
              underlayImage="linear-gradient(to right, #434343 0%, black 100%)"
              symbolsStyle={{ color: 'rgba(255,255,255,0.8)' }}
              symbolSize={20}
              gap={20}
              animation={{ type: 'right', speed: 5 }}
              rotate={45}
              symbols={[
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
                '???',
              ]}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  fontWeight: 'bold',
                }}
              >
                <FaYinYang style={{ color: '#fff', fontSize: 120 }} />
                <h1 style={{ color: '#fff', fontSize: 36 }}>??????</h1>
              </div>
            </Background>
          </div>
          <Code content={Code1} />
          <Title level={2}>Curtain ??????</Title>
          <Paragraph>??????????????????????????????????????????????????????????????????</Paragraph>
          <div className="container">
            <Background
              symbolsStyle={{ opacity: 1 }}
              symbolSize={100}
              gap={0}
              symbols={[
                ...images.map((img) => (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundSize: 'cover',
                      backgroundImage: `url(${img})`,
                      transform: 'scale(1.2)',
                    }}
                  />
                )),
              ]}
              animation={{ type: 'top', speed: 5 }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  background: 'rgba(0,0,0,0.5)',
                  fontSize: 120,
                }}
              >
                ????
                <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>
                  Nice Image
                </h1>
              </div>
            </Background>
          </div>
          <Code content={Code2} />
          <Title level={2}>Exact ????????????</Title>
          <Paragraph>?????????????????????????????????????????????????????????</Paragraph>
          <div className="container">
            <Background
              symbolsStyle={{ opacity: 1 }}
              exact={true}
              symbols={[
                ...dots.map((dot) => (
                  <div
                    style={{
                      position: 'absolute',
                      width: dot.size,
                      height: dot.size,
                      borderRadius: dot.borderRadius,
                      background: dot.background,
                      top: dot.y,
                      left: dot.x,
                    }}
                  />
                )),
              ]}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  fontSize: 120,
                }}
              >
                <FaApple />
                <h1 style={{ color: '#000', fontSize: 36, fontWeight: 'bold' }}>
                  Apple
                </h1>
              </div>
            </Background>
          </div>
          <Code content={Code3} />
          <Title level={2}>Random ????????????</Title>
          <Paragraph>??????????????????????????????????????????????????????</Paragraph>
          <div className="container">
            <Background
              symbols={icons1}
              random={{ fontSizeRange: [60, 90] }}
              rotate={45}
              underlayImage="linear-gradient(to right, #ff0844 0%, #ffb199 100%)"
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  fontSize: 120,
                }}
              >
                <FaApple style={{ color: '#fff' }} />
                <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>
                  Apple
                </h1>
              </div>
            </Background>
          </div>
          <Code content={Code4} />
          <Title level={2}>Why ????????????</Title>
          ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????SmartBackground????????????????????????????????????????????????????????????star???
          <Title level={2}>Props</Title>
          <Api />
          
          <Title level={2}>Tip ??????</Title>
          Background?????????????????????????????????
          ??????Background???children????????????Background?????????????????????position:relative??????
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
