import styled from '@emotion/styled';

const List = styled.ul`
  margin-bottom: 15px;
  padding: 25px 0;
`;

const ListItem = styled.li`
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 50px;
  color: #fff;
`;

const BtnDelete = styled.button`
  background-color: transparent;
  position: relative;
  border: none;
  cursor: pointer;
  fill: #fff;
  &::after {
    content: 'delete';
    position: absolute;
    top: -130%;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    height: fit-content;
    background-color: rgb(168, 7, 7);
    padding: 4px 8px;
    border-radius: 5px;
    transition: 0.2s linear;
    transition-delay: 0.2s;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0;
    visibility: hidden;
  }
  & > .icon {
    transform: scale(1.2);
    transition: 0.2s linear;
  }
  &:hover > .icon {
    transform: scale(1.5);
  }

  &:hover > .icon path {
    fill: rgb(168, 7, 7);
  }

  &:hover::after {
    visibility: visible;
    opacity: 1;
    top: -160%;
  }
`;

const BtnEdit = styled.button``;

const ContactName = styled.span``;
const ContactNumber = styled.span``;

const NotFound = styled.span`
  color: #fff;
`;

export {
  List,
  ListItem,
  BtnDelete,
  BtnEdit,
  ContactName,
  ContactNumber,
  NotFound,
};
