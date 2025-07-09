import React, { useState } from "react";


function GuestbookForm({ onAdd }) {
    const [nickname, setNickname] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
}