import React from 'react';
// import styled, { css } from 'styled-components';
// import './styles.css';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

// const TopBar = styled.div
// ` width: 100%;
// display: flex;
// justify-content: center;
// align-items: none;
// flex-direction: row;
// position: fixed;
// height: 44px;
// background-color: #333;`

// const Container = styled.div
// ` width: 100%;
// display: flex;
// justify-content: none;
// align-items: none;
// flex-direction: row;
// color: #fff;
// letter-spacing: 1px;
// padding: 0 10px;`

// const ContainerLeft = styled.div
// ` display: flex;
// justify-content: none;
// align-items: center;
// flex-direction: row;
// flex: 1;
// font-size: 11px;`

// const Topics =styled.span
// ` cursor: pointer;
// margin-right: 25%;
// font-weight: bold;`

// const Search =styled.span
// ` cursor: pointer;
// margin-right: 25%;
// font-weight: bold;`

// const ContainerCenter = styled.div
// ` display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: row;
// flex: 3;
// font-size: 9px;`

// const GENERAL =styled.span

// const GENERAL =styled.span

// const Search =styled.span

// const Search =styled.span

// const Search =styled.span


// const ContainerRight = styled.div
// `display: flex;
// justify-content: flex-end;
// align-items: center;
// flex-direction: row;
// flex: 1;
// font-size: 11px;
// font-weight: bold;`

// const LogIn = styled.span
// `cursor: pointer;`

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar;