import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import './index.less';
import { getPosition } from './utils';

const REPEAT = [1, 2];

const styles: any = {
  SmartBackground: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

type Animation = {
  type: 'left' | 'right' | 'top' | 'bottom';
  speed: number;
};

interface SmartBackgroundProps {
  symbols?: (string | ReactNode | Element)[]; //字符/符号集合
  random?: { fontSizeRange: number[] } | undefined; //符号是否随机生成位置和大小
  underlayColor?: string; //底衬颜色
  underlayImage?: string; //底衬图片
  symbolsStyle?: Object; //符号样式
  rotate?: number; //符号旋转角度
  symbolSize?: number; //符号大小
  gap?: number; //符号间距
  animation?: Animation | undefined; //滚动动画
  exact?: boolean; //精确模式
  [key: string]: any;
}

const SmartBackground = (props: SmartBackgroundProps) => {
  const {
    underlayColor,
    underlayImage,
    symbols = ['●'],

    symbolsStyle,
    random,
    rotate = 0,
    symbolSize: _fontSize = 90,
    gap: _gap = 10,
    animation,
    exact = false,

    children,
    style,
    className,
    ...restProps
  } = props;

  const backgroundRef = useRef<any>(null);
  const [amount, setAmount] = useState<number>(symbols.length);

  const fontSize = Number(_fontSize);
  const gap = Number(_gap) / 2;
  const CubeWidth = fontSize + 2 * Number(gap || 1);
  // const CubeWidth = fontSize

  const syncAmount = () => {
    if (exact || random) {
      return;
    }
    if (backgroundRef.current) {
      const { width, height } = backgroundRef.current.getBoundingClientRect();

      const moWidth = width % CubeWidth;
      const moHeight = height % CubeWidth;

      const widthFin = width - moWidth;
      const heightFin = height - moHeight;

      const amount = Math.floor(
        (widthFin * heightFin) / (CubeWidth * CubeWidth),
      );
      setAmount(amount);
    }
  };

  const repeatArr = exact || random ? [1] : REPEAT;

  useEffect(() => {
    syncAmount();
    window.addEventListener('resize', syncAmount);
    return () => {
      window.removeEventListener('resize', syncAmount);
    };
  }, []);

  const symbolsFin = useMemo(() => {
    let arr = new Array(amount);
    for (let i = 0; i < amount; i++) {
      arr[i] = symbols[i % symbols.length];
    }
    return arr;
  }, [amount, symbols]);

  return (
    <>
      <div
        style={{
          ...styles.SmartBackground,
          backgroundColor: underlayColor,
          backgroundImage: underlayImage,
          ...style,
        }}
        ref={backgroundRef}
        {...restProps}
      >
        {repeatArr.map((index) => (
          <SymbolList
            animation={animation}
            random={random}
            exact={exact}
            index={index}
          >
            {symbolsFin.map((item, index) => {
              return (
                <SymbolContainer
                  key={index}
                  symbolsStyle={symbolsStyle}
                  rotate={rotate}
                  random={random}
                  gap={gap}
                  fontSize={fontSize}
                  exact={exact}
                >
                  {item}
                </SymbolContainer>
              );
            })}
          </SymbolList>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </>
  );
};
export default SmartBackground;

const SymbolList = styled.div<{
  index: number;
  animation: Animation | undefined;
  random: { fontSizeRange: number[] } | undefined;
  exact?: boolean;
  [key: string]: any;
}>`
  width: 100%;
  height: 100%;
  display: ${(p) => (p.random || p.exact ? 'block' : 'flex')};
  position: ${(p) => (p.exact ? 'relative' : '')};
  flex-direction: row;
  animation: ${(p) => {
    if (!p.animation) {
      return;
    }
    return `scroll-${p.animation.type} ${
      100 / (p.animation.speed || 5)
    }s linear infinite`;
  }};
  flex-wrap: wrap;
  justify-content: space-around;
  position: ${(p) => {
    if (!p.animation) {
      return;
    }
    if (
      p.animation.type === 'left' ||
      p.animation.type === 'right' ||
      p.animation.type === 'bottom'
    ) {
      return 'absolute';
    }
  }};
  top: ${(p) => {
    if (!p.animation) {
      return;
    }
    if (p.animation.type === 'left' || p.animation.type === 'right') {
      return '0';
    }
    if (p.animation.type === 'bottom') {
      return p.index === 1 ? 0 : '-100%';
    }
  }};
  left: ${(p) => {
    if (!p.animation) {
      return;
    }
    if (p.animation.type === 'left') {
      return p.index === 1 ? 0 : '100%';
    }
    if (p.animation.type === 'right') {
      return p.index === 1 ? 0 : '-100%';
    }
  }};
`;

const SymbolContainer = styled.div<{
  fontSize?: number;
  rotate?: number;
  gap?: number;
  symbolsStyle?: object;
  random?: { fontSizeRange: number[] } | undefined;
  exact?: boolean;
  [key: string]: any;
}>(({ fontSize, gap = 100, rotate, symbolsStyle, random, exact }) => {
  let fontSizeFin = fontSize || 90;
  return {
    color: '#000',
    opacity: '0.3',
    width: exact ? 'fit-content' : fontSizeFin + 2 * gap,
    height: exact ? 'fit-content' : fontSizeFin + 2 * gap,
    lineHeight: fontSizeFin + 'px',
    textAlign: 'center',
    padding: gap,
    transform: exact ? 'none' : `rotate(${rotate}deg)`,
    ...symbolsStyle,
    position: random ? 'absolute' : 'unset',
    ...getPosition(random, fontSizeFin),
    display: 'inline-block',
  };
});
