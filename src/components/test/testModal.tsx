import React, { useState } from "react";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import Link from "next/link";

const NotificationModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        <IconButton aria-label="delete" disableRipple>
          <NotificationsNoneSharpIcon
            fontSize="large"
            sx={{ color: grey[900] }}
            onClick={() => setShowModal(true)}
          />
        </IconButton>
      </div>
      {showModal ? (
        <div>
          <Link href="/kakaomap">
            <h2>Modal!</h2>
          </Link>
          <IconButton aria-label="delete" disableRipple>
            <CloseIcon
              fontSize="large"
              sx={{ color: grey[900] }}
              onClick={() => setShowModal(false)}
            />
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};

export default NotificationModal;
