import React, { useState, useEffect } from "react";
import styles from "../css/busInfo.module.css";
import styles1 from "../css/busInfoByPlaceName.module.css";
import { IoSearch } from "react-icons/io5";
import { BsFillBusFrontFill } from "react-icons/bs";
import Graph from "./Graph";

function BusInfo() {
  const [busNum, setBusNumber] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [busInfo, setBusInfo] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [studentsCount, setStudentsCount] = useState(null);

  useEffect(() => {
    if (placeName) {
      // Filter suggestions based on placeName
      const filteredSuggestions = busInfo
        .filter(bus => bus.place.toLowerCase().includes(placeName.toLowerCase()))
        .map(bus => bus.place); // Get the place names
  
      // Use a Set to get unique suggestions
      const uniqueSuggestions = [...new Set(filteredSuggestions)];
  
      setSuggestions(uniqueSuggestions);
    } else {
      setSuggestions([]); 
    }
  }, [placeName, busInfo]);
  

  const updateBusInfo = (input) => {
    if (/^\d+$/.test(input)) {
      fetchBusDetailsByNumber(input);
      fetchStudentsCount(input);
    } else {
      fetchBusDetailsByPlace(input);
    }
  };

  const fetchBusDetailsByNumber = async (number) => {
    try {
      const response = await fetch(`http://localhost:9000/bus/${number}`);
      const data = await response.json();

      if (response.ok) {
        setBusInfo([data]); // Ensure it's an array for consistency
        setBusNumber(number); // Set the bus number
        console.log("Bus data by number:", data); // Log data for debugging
      } else {
        console.log("Error:", data.message);
      }
    } catch (error) {
      console.error("Error fetching bus details:", error);
    }
  };

  const fetchStudentsCount = async (number) => {
    try {
      const response = await fetch(`http://localhost:9000/api/driver-submit-form/${number}`);
      const data = await response.json();
      const today = new Date().toISOString().split('T')[0];

      if (data.records) {
        const todayRecord = data.records.find(record =>
          new Date(record.recordDate).toISOString().split('T')[0] === today
        );
        setStudentsCount(todayRecord ? todayRecord.StudentsCount : 0);
      } else {
        setStudentsCount(0);
      }
    } catch (error) {
      console.log("Error fetching students count:", error);
      setStudentsCount(0);
 }
};


  const fetchBusDetailsByPlace = async (place) => {
    try {
      const response = await fetch(`http://localhost:9000/bus/place/${place}`);
      const data = await response.json();

      if (response.ok) {
        setBusInfo(data);
        setPlaceName(place); // Set the place name here
        console.log("Bus data by place:", data);
      } else {
        console.log("Error:", data.message);
      }
    } catch (error) {
      console.error("Error fetching bus details by place:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value.trim();
    setSearchInput(inputValue); // Update the search input
    setBusNumber(""); // Clear bus number
    setPlaceName(""); // Clear place name
  };


  const {
    busNumber,
    place,
    Route,
    Code,
    Model,
    status,
    estimatedArrival,
    lastUpdated,
    timings
  } = busInfo[0] || {}; // Ensure to handle cases where busInfo is empty

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.header}>
          <div className={styles.titleName}>BUS DETAILS DASHBOARD</div>
          <div className={styles.searchFeild}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Enter Bus Number or Place Name"
                onChange={handleSearchInputChange} // Updated handler
                value={searchInput}
              />
              <button
                className={styles.searchIcon}
                onClick={() => {
                  updateBusInfo(searchInput); // Use searchInput for searching
                }}
              >
                <IoSearch />
              </button>
            </div>
            {suggestions.length > 0 && (
              <div className={styles.suggestionsList}>
                {suggestions.map((bus, index) => (
                  <div 
                    key={index} 
                    onClick={() => {
                      setPlaceName(bus); // Set place name to clicked suggestion
                      setSearchInput(bus); // Show suggestion in input
                      setSuggestions([]); // Clear suggestions after selection
                      updateBusInfo(bus); // Update bus info
                    }} 
                    className={styles.suggestion}
                  >
                    {bus} {/* Render the unique bus place name */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.main}>
        <div className={styles.searchFeild1}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Enter Bus Number or Place Name"
                onChange={handleSearchInputChange} // Updated handler
                value={searchInput}
              />
              <button
                className={styles.searchIcon}
                onClick={() => {
                  updateBusInfo(searchInput); // Use searchInput for searching
                }}
              >
                <IoSearch />
              </button>
            </div>
            {suggestions.length > 0 && (
              <div className={styles.suggestionsList}>
                {suggestions.map((bus, index) => (
                  <div 
                    key={index} 
                    onClick={() => {
                      setPlaceName(bus); // Set place name to clicked suggestion
                      setSearchInput(bus); // Show suggestion in input
                      setSuggestions([]); // Clear suggestions after selection
                      updateBusInfo(bus); // Update bus info
                    }} 
                    className={styles.suggestion}
                  >
                    {bus} {/* Render the unique bus place name */}
                  </div>
                ))}
              </div>
            )}
          </div>
          {busInfo && busNum ? (
            <div className={styles.busInfoByNumber}>
              <div className={styles.busInfoDetails}>
                <div className={styles.leftSub}>
                  <div className={styles.busNum} >
                    <div className={styles.busNumber}>
                      <span className={styles.label}>BUS NO:</span>
                      <span className={styles.number} id={styles.bus1}>{Code}</span>
                    </div>
                    <img src="/busImage.png" alt="Bus Image" />
                  </div>
                  <div className={styles.busNum}>
                    <div className={styles.busNumber} id={styles.live}>
                      LIVE UPDATES & ALERTS:
                    </div>
                    <img src="/alert1.png" alt="Live Updates" />
                  </div>
                  <div className={styles.busNum}>
                    <div className={styles.busNumber}>
                      <span className={styles.label}>STUDENTS COUNT:</span>
                      <span className={styles.number} id={styles.bus1}>
                        {studentsCount !== null ? studentsCount : 'Loading...'}
                    </span>
                    </div>
                    <img src="/studentCount.png" alt="Student Count" />
                  </div>
                  <div className={styles.busNum}>
  <div className={styles.busNumber}>
    <span className={styles.label}>BUS TIMINGS:</span>
    <br />
    {timings ? (
      <>
        <span className={styles.number} id={styles.time}>Morning: {timings.morning}</span>
        <span className={styles.number} id={styles.time}>Evening: {timings.evening}</span>
      </>
    ) : (
      <span className={styles.number}>Timings not available</span>
    )}
  </div>
  <img src="../estimatedArrivalTime.png" alt="Arrival Time"/>
</div>
                </div>
                <div className={styles.rightSub}>
                  <div className={styles.busStatus}>
                    <div className={styles.busStatusD}>
                      <span className={styles.label} id={styles.bus2}>BUS STATUS:</span>
                      <span className={styles.number}>{status}</span>
                    </div>
                    <div className={styles.busUpdates}>
                      <span className={styles.label} id={styles.bus2}>LAST UPDATED:</span>
                      <br />
                      <span className={styles.number}>{lastUpdated}</span>
                    </div>
                    <div className={styles.busStatusImage}>
                      <img src="/busInOut.png" alt="Bus Status" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.busInfoDetailsGraph}>
                <Graph />
              </div>
            </div>
          ) : (
            <div className={styles1.busInfoByPlaceName}>
              <div className={styles1.busPlaceDetails}>
                <div className={styles1.detailsBlock}>
                  <div className={styles1.detailsHead}>
                      BUSES GOING TO &nbsp;&nbsp;
                      <span className={styles.number} id={styles1.placeName}>{placeName}</span> {/* Now displays correctly */}
                  </div>
                </div>
                <div className={styles1.detailsBlockR}>
                  <div className={styles1.busDetailsTable}>
                    <span className={styles1.CodeLabelH}>BUS NUMBERS</span>
                    <span className={styles1.AvailableInLabelH}>AVAILABLE IN</span>
                    <span className={styles1.RouteLabelH}>ROUTE</span>
                  </div>
                  {busInfo && busInfo.length > 0 ? (
                    <div>
                      {busInfo.map((bus) => (
                        <div key={bus.busNumber} className={styles.number} id={styles.busNumberByPlace}>
                          <div className={styles1.busIcon}><BsFillBusFrontFill /></div>
                          <div className={styles1.busDetailsTable}>
                            <span className={styles1.CodeLabel}>{bus?.Code}</span>
                            <span className={styles1.AvailableInLabel} styles={{Width:'30%'}}>{bus?.availableIn}</span>
                            <span className={styles1.RouteLabel}>{bus?.Route}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className={styles.number}>
                      No available buses for this location
                    </span>
                  )}
                </div>
              </div>
              <div className={styles1.busPlaceDetailsRight}>
                <img
                  src="/public/bus-unscreen2.gif"
                  alt="Bus Image"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BusInfo;
