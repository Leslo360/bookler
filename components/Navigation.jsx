import React from "react";
import {
  FlightTakeoff,
  Hotel,
  KingBed,
  LocalTaxi,
  Place,
  LocalActivity,
} from "@material-ui/icons";

function Navigation() {
  return (
    <div className="p-10 text-black absolute top-28 w-10/12 left-80 ">
      <div className="flex justify-between w-1/6">
        <h5 className="flex flex-col text-white justify-between items-center hover:shadow-lg p-3 mr-6 rounded-xl cursor-pointer uppercase bg-[#0076FF]">
          <FlightTakeoff fontSize="large" className="mb-3" />
          Flights
        </h5>
        <h5 className="flex flex-col text-white justify-between items-center hover:shadow-lg p-3 mr-6 rounded-xl cursor-pointer uppercase">
          <Hotel fontSize="large" className="mb-3" />
          Hotels
        </h5>
        <h5 className="flex flex-col text-white justify-between items-center hover:shadow-lg p-3 mr-6 rounded-xl cursor-pointer uppercase">
          <KingBed fontSize="large" className="mb-3" />
          Villa
        </h5>
        <h5 className="flex flex-col text-white justify-between items-center hover:shadow-lg p-3 mr-6 rounded-xl cursor-pointer uppercase">
          <LocalTaxi fontSize="large" className="mb-3" />
          Taxi
        </h5>
      </div>
      <div className="bg-white p-5 w-full mt-5 rounded-xl h-[321px]">
        <div className="flex ">
          <h4 className="mr-4 text-gray-600 cursor-pointer hover:shadow-lg bg-[#F0F2F6] rounded-full p-2 w-[100px] text-center">
            Oneway
          </h4>
          <h4 className="mr-4 text-gray-600 cursor-pointer hover:shadow-lg rounded-full p-2 w-[100px] text-center">
            Round Trip
          </h4>
          <h4 className="mr-4 text-gray-600 cursor-pointer hover:shadow-lg rounded-full p-2 w-[100px] text-center">
            Multi City
          </h4>
        </div>
        <div className="flex justify-between mt-2 p-4">
          <div className="flex w-full m-3 p-3 bg-[#EEF0F4] rounded-lg border-gray-200 border">
            <h6 className="text-xs uppercase text-gray-400">
              <Place fontSize="small" />
              from
            </h6>
          </div>
          <div className="flex w-full m-3 p-3 bg-[#EEF0F4] rounded-lg border-gray-200 border">
            <h6 className="text-xs uppercase text-gray-400">
              <Place fontSize="small" />
              to
            </h6>
          </div>
          <div className="flex w-full m-3 p-3 bg-[#EEF0F4] rounded-lg border-gray-200 border">
            <h6 className="text-xs uppercase text-gray-400">
              <LocalActivity fontSize="small" />
              class
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
