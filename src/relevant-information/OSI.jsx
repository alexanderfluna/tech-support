import React, { useState } from 'react';

const OSI = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => toggleAnswer('osi')}>Learn about the OSI model.</button>
      {visibleAnswer === 'osi' && (
        <div className="faq-answer">
          <p><strong>Layer 1, the Physical layer</strong>, is all about the actual signals that carry data. These signals can be electrical pulses, light pulses, or radio waves that represent binary bits (0s and 1s). It handles how data moves through cables and wireless signals. Copper cables, like Ethernet, send electrical signals, while fiber optic cables use light. Wireless connections, such as Wi-Fi and Bluetooth, use radio waves. Devices like media converters change signals from one type to another, and hubs repeat signals to all connected devices.</p>
          <p><strong>Layer 2, the Data Link layer</strong>, is responsible for organizing data into frames, which include MAC addresses for communication. This layer ensures data moves from one device to another without errors. It has two parts: the MAC (Media Access Control) and LLC (Logical Link Control). Network Interface Cards (NICs) allow devices to connect to networks using MAC addresses. Switches forward frames to the correct device, reducing unnecessary network traffic. Bridges help connect and filter traffic between different networks.</p>
          <p><strong>Layer 3, the Network layer</strong>, deals with packets, which contain IP addresses for communication across networks. This layer ensures that data reaches the right destination by managing routing and logical addressing. Routers direct packets based on IP addresses, helping them move between networks. Layer 3 switches combine the features of both switches and routers, allowing them to handle both local and wide network communication.</p>
          <p><strong>Layer 4, the Transport layer</strong>, is responsible for breaking data into segments or datagrams and adding port numbers to help identify specific applications, such as web browsing or file transfers. This layer ensures reliable data delivery by managing flow control, error detection, and retransmission when needed. Devices like computers, servers, printers, and cameras use the Transport layer to maintain data reliability with protocols like TCP (for reliable, connection-oriented transmission) and UDP (for faster, connectionless transmission).</p>
          <p><strong>Layer 5, the Session layer</strong>, manages and maintains communication sessions between devices. It ensures that sessions open, stay active, and close properly. This is especially important for applications that need continuous communication, such as video calls or file transfers. Streaming services also use this layer to establish and manage video streaming sessions.</p>
          <p><strong>Layer 6, the Presentation layer</strong>, ensures that data is in the right format for applications to use. It handles data translation, encryption, and compression. For example, it converts data into formats like JPEG for images, MPEG for videos, HTML for web pages, and ASCII for text. Devices like computers and TVs use this layer to process multimedia content. It is also where encryption happens for secure applications, using standards like AES for security and TLS/SSL for safe web browsing. Video compression formats like H.264 and H.265 also work at this layer to optimize video quality and file size.</p>
          <p><strong>Layer 7, the Application layer</strong>, is the one closest to users. It provides interfaces that allow applications to communicate over a network. This layer enables services such as email, web browsing, and file transfers. Common protocols include HTTP/HTTPS for web browsing, FTP for transferring files, SMTP for sending emails, and DNS for converting domain names into IP addresses.</p>  
        </div>
      )}
    </div>
  );
};

export default OSI;
