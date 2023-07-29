'use client';
import React from "react";
import Image from 'next/image';
import styles from './page.module.css'
import { styled } from 'styled-components';
import Link from "next/link";
import { Container, Navbar } from 'react-bootstrap';
import { useState, useEffect } from "react";


/*styled components */
const Homemenu = styled.section `
position: fixed;
bottom: 41rem;
z-index: 5;
margin-bottom: 2rem;
padding-right: 57rem;
border-bottom: 1px solid grey;
display: flex;
align-items: center;
`;

const Title = styled.h1 `
position: relative;
font-size: 1.5rem;
color: white;
`;

const Menubar = styled.nav `
list-style-type: none;
margin: 0.5rem;
color: white;
`;

const Itemnav = styled.ul `
display: flex;
align-items: center;
`;

const IpAddress = () => {
    const [inputIpAddress, setInputIpAddress] = useState('');
    const [inputPrefix, setInputPrefix] = useState('');
    const [networkAddress, setNetworkAddress] = useState('');
    const [firstUsableAddress, setFirstUsableAddress] = useState('');
    const [lastUsableAddress, setLastUsableAddress] = useState('');
    const [broadcastAddress, setBroadcastAddress] = useState('');
    const [nextNetworkAddress, setNextNetworkAddress] = useState('');
  
    useEffect(() => {
      // Add event listener for Enter key press on input fields
      const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          calculate(inputIpAddress, inputPrefix);
        }
      };
  
      const ipInput = document.getElementById("ip-address");
      const prefixInput = document.getElementById("prefix");
  
      ipInput.addEventListener("keypress", handleKeyPress);
      prefixInput.addEventListener("keypress", handleKeyPress);
  
      // Clean up event listeners on component unmount
      return () => {
        ipInput.removeEventListener("keypress", handleKeyPress);
        prefixInput.removeEventListener("keypress", handleKeyPress);
      };
    }, [inputIpAddress, inputPrefix]);
  
  
  
    function calculate(ipAddress, prefix) {
  
      // Validate input values
      var ipValid = validateIPAddress(ipAddress);
      var prefixValid = validatePrefix(prefix);
    
      if (!ipValid) {
        document.querySelector("#ip-feedback").style.display = "block";
      } else {
        document.querySelector("#ip-feedback").style.display = "none";
      }
    
      if (!prefixValid) {
        document.querySelector("#prefix-feedback").style.display = "block";
      } else {
        document.querySelector("#prefix-feedback").style.display = "none";
      }
    
      if (!ipValid || !prefixValid) {
        return;
      }
    
      // For Benedict
      function getNetworkAddress(ipAddress, prefix) {
        // Convert IP address to binary
        const ipBinary = ipAddress.split(".").map((octet) => {
          return ("00000000" + parseInt(octet, 10).toString(2)).slice(-8);
        });
    
        // Calculate the subnet mask based on the prefix
        const subnetMaskBinary = [];
        for (let i = 0; i < 32; i++) {
          if (i < prefix) {
            subnetMaskBinary.push("1");
          } else {
            subnetMaskBinary.push("0");
          }
        }
    
        // Split the subnet mask binary into octets
        const subnetMaskOctets = [];
        for (let i = 0; i < 32; i += 8) {
          const octetBinary = subnetMaskBinary.slice(i, i + 8).join("");
          subnetMaskOctets.push(parseInt(octetBinary, 2));
        }
    
        // Calculate the network address
        const networkAddressBinary = [];
        for (let i = 0; i < 4; i++) {
          const ipOctet = ipBinary[i];
          const subnetMaskOctet = subnetMaskOctets[i];
          let networkOctet = "";
          for (let j = 0; j < 8; j++) {
            const ipBit = ipOctet.charAt(j);
            const subnetMaskBit = subnetMaskOctet & (1 << (7 - j)) ? "1" : "0";
            if (subnetMaskBit === "1") {
              networkOctet += ipBit;
            } else {
              networkOctet += "0";
            }
          }
          networkAddressBinary.push(networkOctet);
        }
    
        // Convert network address back to decimal
        const networkAddress = networkAddressBinary.map((octet) => {
          return parseInt(octet, 2);
        });
    
        return networkAddress.join(".");
      }
    
      // For Gelo
      function getBroadcastAddress(ipAddress, prefix) {
        // Convert IP address to binary
        const ipBinary = ipAddress.split(".").map((octet) => {
          return ("00000000" + parseInt(octet, 10).toString(2)).slice(-8);
        });
    
        // Calculate the subnet mask based on the prefix
        const subnetMaskBinary = [];
        for (let i = 0; i < 32; i++) {
          if (i < prefix) {
            subnetMaskBinary.push("1");
          } else {
            subnetMaskBinary.push("0");
          }
        }
    
        // Split the subnet mask binary into octets
        const subnetMaskOctets = [];
        for (let i = 0; i < 32; i += 8) {
          const octetBinary = subnetMaskBinary.slice(i, i + 8).join("");
          subnetMaskOctets.push(parseInt(octetBinary, 2));
        }
    
        // Calculate the network address
        const networkAddressBinary = [];
        for (let i = 0; i < 4; i++) {
          const ipOctet = ipBinary[i];
          const subnetMaskOctet = subnetMaskOctets[i];
          let networkOctet = "";
          for (let j = 0; j < 8; j++) {
            const ipBit = ipOctet.charAt(j);
            const subnetMaskBit = subnetMaskOctet & (1 << (7 - j)) ? "1" : "0";
            if (subnetMaskBit === "1") {
              networkOctet += ipBit;
            } else {
              networkOctet += "0";
            }
          }
          networkAddressBinary.push(networkOctet);
        }
    
        // Convert network address back to decimal
        const networkAddress = networkAddressBinary.map((octet) => {
          return parseInt(octet, 2);
        });
    
        // Calculate broadcast address
        const broadcastAddressBinary = [];
        for (let i = 0; i < 4; i++) {
          const networkOctet = networkAddressBinary[i];
          const subnetMaskOctet = subnetMaskOctets[i];
          let broadcastOctet = "";
          for (let j = 0; j < 8; j++) {
            const networkBit = networkOctet.charAt(j);
            const subnetMaskBit = subnetMaskOctet & (1 << (7 - j)) ? "1" : "0";
            if (subnetMaskBit === "1") {
              broadcastOctet += networkBit;
            } else {
              broadcastOctet += "1";
            }
          }
          broadcastAddressBinary.push(broadcastOctet);
        }
    
        // Convert broadcast address back to decimal
        const broadcastAddress = broadcastAddressBinary.map((octet) => {
          return parseInt(octet, 2);
        });
    
        return broadcastAddress.join(".");
      }
    
      function getNextNetworkAddress(broadcastAddress) {
        // Convert the network address to an array of octets
        var octets = broadcastAddress.split(".");
    
        // Initialize the carry variable
        var carry = 1;
    
        // Iterate through the octets in reverse order
        for (var i = octets.length - 1; i >= 0; i--) {
          // Convert the octet to an integer
          var octet = parseInt(octets[i]);
    
          // Add the carry to the current octet
          var sum = octet + carry;
    
          // Check if the sum exceeds 255
          if (sum > 255) {
            // Carry over to the next octet
            carry = 1;
            octet = sum - 256;
          } else {
            // No carry needed
            carry = 0;
            octet = sum;
          }
    
          // Update the octet in the array
          octets[i] = octet.toString();
    
          // Break the loop if no carry is needed
          if (carry === 0) {
            break;
          }
        }
    
        // Join the octets into a string and return the next network address
        return octets.join(".");
      }
    
      const networkAddress = getNetworkAddress(ipAddress, prefix);
      const lowestUsable = incrementIPAddress(networkAddress, 1);
      const broadcast = getBroadcastAddress(ipAddress, prefix);
      const nextNetworkAddress = getNextNetworkAddress(broadcast);
      const highestUsable = decrementIPAddress(broadcast, 1);
    
      // // Set the state variables with the calculated results
      setNetworkAddress(networkAddress);
      setFirstUsableAddress(lowestUsable);
      setLastUsableAddress(highestUsable);
      setBroadcastAddress(broadcast);
      setNextNetworkAddress(nextNetworkAddress);
    
      // For Alex
      function getSubnetMask(hostBits) {
        let mask = [],
          i,
          n;
        for (i = 0; i < 4; i++) {
          n = Math.min(hostBits, 8);
          mask.push(256 - Math.pow(2, 8 - n));
          hostBits -= n;
        }
        return mask.join(".");
      }
    
      function getSubnetBinary(prefix) {
        let subnetMaskBinary = [];
        for (let i = 0; i < 32; i++) {
          if (i < prefix) {
            subnetMaskBinary.push("1");
          } else {
            subnetMaskBinary.push("0");
          }
        }
    
        let subnetMaskOctets = [];
        for (let i = 0; i < 32; i += 8) {
          const octetBinary = subnetMaskBinary.slice(i, i + 8).join("");
          subnetMaskOctets.push(octetBinary);
        }
    
        const subnetMaskOctetsFormatted = subnetMaskOctets.join(".");
        return subnetMaskOctetsFormatted;
      }
    
      function getIPClass(ipAddress, prefix) {
        let ipSplit = ipAddress.split(".");
        let firstOctet = ipSplit[0];
        let ipClass;
    
        if (firstOctet >= 1 && firstOctet <= 126 && prefix == 8) {
          ipClass = "A";
        } else if (firstOctet >= 128 && firstOctet <= 191 && prefix == 16) {
          ipClass = "B";
        } else if (firstOctet >= 192 && firstOctet <= 223 && prefix == 24) {
          ipClass = "C";
        } else {
          ipClass = "Classless";
        }
        return ipClass;
      }
    
      let subnetMask2 = getSubnetMask(prefix);
      let ipClass = getIPClass(ipAddress, prefix);
      let subnetBinary = getSubnetBinary(prefix);
    
      document.getElementById("subnetMask").innerHTML = subnetMask2;
      document.getElementById("subnetMaskBinary").innerHTML = subnetBinary;
      document.getElementById("ipClass").innerHTML = ipClass;
    
      //usable hosts
      function getUsableHosts(prefix) {
        let hostBits = 32 - prefix;
        let usableHosts = Math.pow(2, hostBits) - 2;
        if (usableHosts <= 0) {
          usableHosts = 0;
        }
        return usableHosts;
      }
    
      function getTotalHosts(prefix) {
        let hostBits = 32 - prefix;
        let totalHosts = Math.pow(2, hostBits);
        if (totalHosts <= 0) {
          totalHosts = 0;
        }
        return totalHosts;
      }
    
      let usableHosts = getUsableHosts(prefix);
      let totalHosts = getTotalHosts(prefix);
      document.getElementById("usableHost").innerHTML =
        usableHosts.toLocaleString();
      document.getElementById("totalHost").innerHTML = totalHosts.toLocaleString();
    
      function validateIPAddress(ipAddress) {
        var ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
        if (!ipRegex.test(ipAddress)) {
          return false;
        }
    
        var octets = ipAddress.split(".");
        for (var i = 0; i < 4; i++) {
          var octet = parseInt(octets[i]);
          if (isNaN(octet) || octet < 0 || octet > 255) {
            return false;
          }
        }
    
        return true;
      }
    
      function validatePrefix(prefix) {
        return prefix >= 0 && prefix <= 32;
      }
    
      function incrementIPAddress(ipAddress, increment) {
        var octets = ipAddress.split(".");
        var lastIndex = octets.length - 1;
    
        // Convert last octet to integer
        var lastOctet = parseInt(octets[lastIndex]);
    
        // Increment last octet
        lastOctet += increment;
    
        // Handle carryover to previous octets
        for (var i = lastIndex; i >= 0; i--) {
          if (lastOctet > 255) {
            // Carryover to previous octet
            lastOctet -= 256;
            octets[i] = "0";
            if (i > 0) {
              // Increment previous octet
              octets[i - 1] = String(parseInt(octets[i - 1]) + 1);
            } else {
              // First octet reached, invalid
              return "Invalid";
            }
          } else {
            // Update last octet
            octets[lastIndex] = String(lastOctet);
            break;
          }
        }
    
        return octets.join(".");
      }
    
      function decrementIPAddress(ipAddress, decrement) {
        var octets = ipAddress.split(".");
        var lastIndex = octets.length - 1;
    
        // Convert last octet to integer
        var lastOctet = parseInt(octets[lastIndex]);
    
        // Decrement last octet
        lastOctet -= decrement;
    
        // Handle borrow from previous octets
        for (var i = lastIndex; i >= 0; i--) {
          if (lastOctet < 0) {
            // Borrow from previous octet
            lastOctet += 256;
            octets[i] = "255";
            if (i > 0) {
              // Decrement previous octet
              octets[i - 1] = String(parseInt(octets[i - 1]) - 1);
            } else {
              // First octet reached, invalid
              return "Invalid";
            }
          } else {
            // Update last octet
            octets[lastIndex] = String(lastOctet);
            break;
          }
        }
    
        return octets.join(".");
      }
      }
    
    return (
        <main className={styles.main}>
            <Homemenu>
                <Title>
                    BG Tech
                </Title>
                <Menubar>
                    <Itemnav className={styles.menu}>
                        <Link href='../../'><li className={styles.menuitems}>Home</li></Link>
                        <Link href='../../about_me'><li className={styles.menuitems}>About Me</li></Link>
                        <Link href='../../projects'><li className={styles.menuitems}>Projects</li></Link>
                    </Itemnav>
                </Menubar>
            </Homemenu>

            <div className={styles.main}>
                <Navbar className="bg-color-tertiary">
                    <Container id="containerh">
                        <Navbar.Text className={styles.title}>
                        IP Address Calculator
                        </Navbar.Text>
                    </Container>
                </Navbar>

                <section >
                    <div className="containerip">
                      <div className="col-md-6">
                        <div className="col-12">
                          <div className="input-group">
                            <span htmlFor='ip-address' className="input-group-text" id='basic-addon1'>
                              Given IP Address
                            </span>
                            <input 
                            type="text"
                            className="form-control"
                            id="ip-address"
                            aria-describedby="basic-addon1"
                            value={inputIpAddress}
                            placeholder="192.168.0.1"
                            onChange={(e) => setInputIpAddress(e.target.value)}
                            required
                            />
                            <div id="ip-feedback" className="invalid-feedback">
                              Please enter a valid IP Address.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col-12">
                            <div className="input-group">
                              <span htmlFor='prefix' className="input-group-text" id="basic-addon2">
                                /
                              </span>
                              <input 
                              type="text"
                              className="form-control"
                              id="prefix"
                              aria-describedby="basic-addon2"
                              value={inputPrefix}
                              placeholder="24"
                              onChange={(e) => setInputPrefix(e.target.value)}
                              required
                              />
                              <div id="prefix-feedback" className="invalid-feedback">
                                Please enter a valid Prefix
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <button id="calculate-btn" type="button" className="btn btn-primary" onClick={() => {calculate(inputIpAddress, inputPrefix)}}>
                              Compute
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>

                <section>
                  <div className="containerip">
                    <table className="table table-hover">
                      <thead>
                        <tr className="text-primary">
                        <th scope='col'>||Network Address	&#40;NA&#41;|</th>
                        <th scope='col'>|First Usable Address	&#40;NA&#41;|</th>
                        <th scope='col'>|Last Usable Address|</th>
                        <th scope='col'>|Broadcast Address	&#40;BA&#41;|</th>
                        <th scope='col'>|Next Network Address	&#40;NNA&#41;||</th>
                        </tr>
                      </thead>
                      <tbody className="output">
                        <tr>
                        <td id='network-address'>{networkAddress}</td>
                        <td id='first-usable-address'>{firstUsableAddress}</td>
                        <td id='last-usable-address'>{lastUsableAddress}</td>
                        <td id='broadcast-address'>{broadcastAddress}</td>
                        <td id='next-network-address'>{nextNetworkAddress}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <div className="containerip">
                    <div>
                      <table className="table table-striped-column" id="table2">
                        <tbody>
                          <tr>
                            <td className="col-5">Subnet Mask:</td>
                            <td id="subnetMask"> -- </td>
                          </tr>
                          <tr>
                            <td className="col-5">Binary Subnet Mask:</td>
                            <td id="subnetMaskBinary"> -- </td>
                          </tr>
                          <tr>
                            <td>IP Class:</td>
                            <td id="ipClass"> -- </td>
                          </tr>
                          <tr>
                            <td>Total Number of Hosts:</td>
                            <td id="totalHost"> -- </td>
                          </tr>
                          <tr>
                            <td>Usable Host:</td>
                            <td id="usableHost"> -- </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
            </div>
        </main>
    );
};

export default IpAddress;