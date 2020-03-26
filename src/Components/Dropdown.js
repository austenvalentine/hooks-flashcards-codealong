import React from "react";
import styled from "styled-components";
import nanoid from "nanoid";

const StyledSelectMenu = styled.div`
  // input[type="checkbox"],
  // input[type="radio"] {
  //   opacity: 0;
  //   position: absolute;
  //   left: -999999999999px;
  //   top: -999999999999px;
  // }

  ul {
    list-style-type: none;
    display: flex;
    flex-flow: column wrap;
    height: 60vh;
    padding: 10px;
    padding-top: 5vh;
    justify-content: space-between;
    color: #fae896;
    font-weight: 500;
    font-size: 3rem;
    text-align: center;
  }

  li {
    padding: 10px;
    button {
      color: inherit;
      background-color: inherit;
      border: inherit;
      font-size: inherit;
      transform-origin: right;
      transition: 0.3s all;
      &:hover {
        transform: scale(1.3, 1.3);
      }
      &:focus {
        outline: 3px cyan solid;
      }
    }
  }

  @media (orientation: landscape) and (max-height: 550px) {
    ul {
      position: absolute;
      right: 0;
      top: -10px;
      padding: 0;
      font-size: 2rem;
      text-align: right;
      height: 100%;
    }
  }
`;

function SelectMenu({ children }) {
  const handleClick = children.props.onClick;
  const inputName = "sm-" + nanoid();
  const innerChildren = [...children.props.children];
  const prompt = innerChildren.splice(0, 1);

  const listItems = innerChildren.map(function(innerChild, i) {
    const { children: text, value } = innerChild.props;
    // const innerChildId = nanoid();
    const htmlOutput = (
      <li key={i}>
        <button value={value} alt={text} onClick={handleClick}>
          {text}
        </button>
      </li>
    );

    return htmlOutput;
  });

  const List = function({ children }) {
    return <ul id={inputName}>{children}</ul>;
  };

  return (
    <StyledSelectMenu inputRef={List}>
      {/* <input aria-hidden type="checkbox" id={`toggle-${inputName}`} />
      <label className="regionName" htmlFor={`toggle-${inputName}`}>
        {prompt}
      </label> */}
      <p className="regionName">{prompt}</p>
      <List>{listItems}</List>
    </StyledSelectMenu>
  );
}

export default SelectMenu;
