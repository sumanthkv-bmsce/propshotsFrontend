import React, { useState } from "react";

export default () => {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");

  return (
    <div>
      <div className="row">
        <div class="inner-wrap">
          <div class="section">
            <label for="plotarea">Plot Area: </label>
          </div>
          <input
            type="text"
            name="plotarea"
            id="plotarea"
            placeholder="Enter Plot area"
            required
          />
        </div>

        <div class="inner-wrap">
          <div class="section">
            <label for="areaunit">Areaunit: </label>
          </div>
          <select id="areaunit" name="areaunit" required>
            <option disabled selected value>
              select any one
            </option>
            <option value="Sq.Ft">Sq.Ft</option>
            <option value="Sq.Mt">Sq.Mt</option>
            <option value="Sq.Yd">Sq.Yd</option>
            <option value="Acres">Acres</option>
            <option value="Marla">Marla</option>
            <option value="Cents">Cents</option>
            <option value="Bigha"> Bigha</option>
            <option value="Kottah">Kottah</option>
            <option value="Kanal">Kanal</option>
            <option value="Grounds">Grounds</option>
            <option value="Ares">Ares</option>
            <option value="Guntha">Guntha</option>
            <option value="Biswa">Biswa</option>
            <option value="Hectares">Hectares</option>
            <option value="Chataks">Chataks</option>
            <option value="Perch">Perch</option>
            <option value="Rood">Rood</option>
            <option value="Aankadam">Aankadam</option>
          </select>
        </div>

        <div class="inner-wrap2">
          <div class="section">
            <label for="marketvalue">Market Value: </label>
          </div>
          <input
            type="text"
            name="marketvalue"
            id="marketvalue"
            placeholder="Enter the market value"
            required
          />
          <p id="marketamt"></p>
        </div>

        <div class="inner-wrap">
          <div class="section">
            <label for="maxdiscountper">Discount %: (0 - 100)</label>
          </div>
          <input
            type="text"
            name="maxdiscountper"
            id="maxdiscountper"
            placeholder="Percentage"
            required
          />
          <p id="error"></p>
        </div>

        <div class="inner-wrap">
          <div class="section">
            <label for="maxdiscountamt">Discount Amount:</label>
          </div>
          <input
            type="text"
            name="maxdiscountamt"
            id="maxdiscountamt"
            placeholder="Amount"
            required
          />

          <p id="discounterr"></p>
        </div>

        <div class="inner-wrap">
          <div class="section">
            <label for="images"> Upload profile image </label>
          </div>

          <input
            type="file"
            id="img1"
            name="myImage"
            accept="image/*"
            required
          />
        </div>

        <div class="inner-wrap">
          <div class="section">
            <label for="images"> Upload images: (max: 4) </label>
          </div>

          <input
            type="file"
            id="img1"
            name="myImage"
            accept="image/*"
            multiple
            required
          />
        </div>

        <input type="submit" name="submit" value="Submit" />

        <div>
          {/* <div>
              <button type="button" id="prevBtn" onclick="nextPrev(-1)">
                Previous
              </button>
              <button type="button" id="nextBtn" onclick="nextPrev(1)">
                Next
              </button>
            </div> */}
        </div>
      </div>
    </div>
  );
};
