import React from "react";
import "../css/Form.css";

function Form({ data }) {
  console.log(data);
  return (
    <div className="main-block">
      <form>
        <div className="title">
          <h2>Details</h2>
        </div>
        <div className="info">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="name" value={data.title} />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            className="fname"
            type="text"
            name="name"
            value={data.description}
          />
          <label htmlFor="active">Active</label>
          <input id="active" type="text" name="name" value={data.active} />
          <label htmlFor="startdate">Start Date</label>
          <input id="startdate" type="text" name="name" value={data.startDate} />
          <label htmlFor="enddate">End Date</label>
          <input id="enddate" type="text" name="name" value={data.endDate} />
          <label htmlFor="key-docs-title">kycDocs Title</label>
          <div className="key-docs">
            {data.kycDocs.map((doc) => {
              return <input id="key-docs-title" type="text" name="name" value={doc.title} />;
            })}
          </div>
          <label htmlFor="organizationType">Organization Title</label>
          <input id="organizationType" type="text" name="name" value={data.organizationType.title} />
          <label htmlFor="optionText">Organization Option Text</label>
          <div className="organization-type">
            {data.organizationType.options.map((option) => {
              return (
                <input id="optionText" type="text" name="name" value={option.optionText} />
              );
            })}
          </div>
        </div>
        <button type="submit" href="/">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
