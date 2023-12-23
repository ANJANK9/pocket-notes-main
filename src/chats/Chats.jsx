import React, { useEffect, useRef, useState } from "react";
import styles from "./chats.module.css";
import { Icon, IconButton } from "../styled";
import Chat from "./Chat";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChats } from "../store/appSlice";
import { getCurrentDateTime, getInitials, trimString } from "../help";

const Chats = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const chatScroll = useRef(null);

  const store = useSelector((store) => store.app);
  const chatDetails = store.chats[params.id];

  if (!chatDetails) {
    useEffect(() => {
      navigate("/");
    }, []);
    return null;
  }

  function addText(note) {
    const newNotes = [...chatDetails.notes, note];
    const obj = {
      ...store.chats,
      [params.id]: {
        name: chatDetails.name,
        color: chatDetails.color,
        notes: newNotes,
      },
    };
    dispatch(addChats(obj));
  }

  // function handleScroll() {
  //   setTimeout(() => {
  //     if (chatScroll.current) {
  //       chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
  //     }
  //   }, 500);
  // }

  return (
    <div className={styles.box}>
      <div className={styles.head}>
        <Link to={"/"}>
          <IconButton $bgColor="transparent">🠐</IconButton>
        </Link>
        <Icon className={styles.icon} $bgColor={chatDetails.color}>
          {getInitials(chatDetails.name)}
        </Icon>
        <p className={styles.name}>{chatDetails.name}</p>
      </div>
      <div className={styles.chats} ref={chatScroll}>
        {chatDetails.notes.map((m, i) => (
          <Chat text={m.text} date={m.time.date} time={m.time.time} key={i} />
        ))}
      </div>
      <div className={styles.input}>
        <textarea
        value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..........."
        ></textarea>
        <IconButton
          onClick={() => {
            if (trimString(text)) {
              addText({
                text: trimString(text),
                time: getCurrentDateTime(),
              });
              setText("");
              // handleScroll();
            }
          }}
          $size="3rem"
          $bgColor="transparent"
          $color={text ? "#001F8B" : "#ABABAB"}
        >
          ➤
        </IconButton>
      </div>
    </div>
  );
};

export default Chats;
