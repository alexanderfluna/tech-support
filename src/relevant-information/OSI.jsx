import React, { useState } from 'react';

const OSI = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (key) => {
    setVisibleAnswer(visibleAnswer === key ? null : key);
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => toggleAnswer('osi')}>What is the OSI model?</button>
      {visibleAnswer === 'osi' && (
        <div className="faq-answer">
            <p>Layer 1 - Physical</p>
            <li>Physical signals, such as electrical pulses, light pulse, or radio waves, represent binary bits (0s and 1s).</li>
            <li>Handles raw bit transmission over physical media, managing hardware characteristics such as connectors, voltage levels, and data rates.</li>
            <li>Copper cables: Transmit electrical signals (Ethernet, RS485 / 422 / 232).</li>
            <li>Fiber optic cables: Transmit light signals.</li>
            <li>Wireless: Use radio waves (Wi-Fi, Bluetooth)</li>
            <li>Media converters: Convert signals between different types of media</li>
            <li>Hubs: Repeat signals to all connected devices</li>

            <p>Layer 2 - Data Link</p>
            <li>Frames, each containing MAC addresses, with communication based on hardware addressing rather than IP addresses.</li>
            <li>Provides node-to-node data transfer and handles error detection and correct at the frame level. It is divided into two sublayers: MAC (Media Access Control) and LLC (Logical Link Control).</li>
            <li>Network Interface Cards (NICS): Enable device network access through MAC addressing.</li>
            <li>Switches: Forward frames to the correct device based on MAC addresses, reducing network traffic.</li>
            <li>Bridges: Link and filter traffic between two separate networks using MAC addresses.</li>

            <p>Layer 3 - Network</p>
            <li>Packets, containing IP addresses, allow communication across different networks and enabling end-to-end data transfer.</li>
            <li>Manages routing across networks. This layer is responsible for logical addressing (IP addresses), packet forward, and path determination.</li>
            <li>Routers: Direct packets across networks by interpreting IP addresses.</li>
            <li>Layer 3 switches: Combine Layer 2 switching and Layer 3 routing capabilities.</li>

            <p>Layer 4 - Transport</p>
            <li>Segments or datagrams, which include port numbers identifying specific devices or applications, such as web or file transfer services exist in this layer.</li>
            <li>This layer ensures reliable data transfer through flow control, segmentation, error detection, retransmission, and acknowledgements.</li>
            <li>Computers, Servers, Printers, TVs, Cameras, and other devices use the Trasnport layer to manage data reliability with protocols such as TCP or UDP.</li>
            <li>Transmission Control Protocol (TCP): Reliable, connection-oriented transmission.</li>
            <li>User Datagram Protocol (UDP): Faster, connectionless transmission.</li>

            <p>Layer 5 - Session</p>
            <li>This layer ensures sessions are opened, maintained, and closed in an organized manner. It manages sessions with multiple streams between devices.</li>
            <li>Computers and server use the Session layer for applications needing persisting connections like video calls or file transfers.</li>
            <li>Streaming servers and clients use the Session layer to set up video streaming session.</li>

            <p>Layer 6 - Presentation</p>
            <li>This layer manages data translation, encryption, and compression, ensuring that data is in a format compatible with the application layer. It translated data into formats like JPEG, MPEG, HTML, or ASCII</li>
            <li>Computers and TVs use this layer to handle multimedia data, translating it into viewable formats.</li>
            <li>Servers encrypt and decrypt at this layer, especailly for secure web applications (SSL/TLS)</li>
            <li>AES (Advanced Encryption Standard): Used to encrypt data for security purposes.</li>
            <li>TLS/SSL (Transport Layer Security/Secure Sockets Layer): Encrypts data for secure communication.</li>
            <li>H.264: Widely used video compression standard, balancing quality and data size for efficient transmission. (Average processors)</li>
            <li>H.265: Advanced compression standard offering higher efficiency than H.264, reducing bandwidth requirements for the same quality. (Above-average processors)</li>

            <p>Layer 7 - Application</p>
            <li>The Application layer is closest to the user, providing interfaces for applications to communicate with the network, enabling services like email, file transfers, and web browsing.</li>
            <li>HTTP/HTTPS (Hypertext Transfer Protocol/Secure): Protocol for web browsing.</li>
            <li>FTP (File Transfer Protocol): Used for file transfers between client and server.</li>
            <li>SMTP (Simple Mail Transfer Protocol): Manages the sending of email.</li>
            <li>DNS (Domain Name System): Resolves domain names to IP addresses.</li>

        </div>
      )}
    </div>
  );
};

export default OSI;
