import React from "react";

import classnames from "classnames";
import Calendar from "rc-calendar";
import DatePicker from "rc-calendar/lib/Picker";
import ptBR from "rc-calendar/lib/locale/pt_BR";
import "rc-time-picker/assets/index.css";
import TimePickerPanel from "rc-time-picker/lib/Panel";

import moment from "moment";
import "moment/locale/pt-br";

ptBR.timeSelect = "Selecionar Hora";

function disabledDate(current) {
  if (!current) {
    return false;
  }
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.valueOf() < date.valueOf(); // can not select days before today
}

const calendar = (
  <Calendar
    locale={ptBR}
    style={{ zIndex: 1000 }}
    dateInputPlaceholder="Selecione uma data e hora"
    format="DD/MM/YYYY HH:mm"
    timePicker={
      <TimePickerPanel
        showSecond={false}
        defaultValue={moment("00:00:00", "HH:mm")}
      />
    }
    disabledDate={disabledDate}
  />
);

const DateTimePicker = ({ value, disabled, onChange, inputClassName }) => {
  return (
    <DatePicker calendar={calendar} value={value} onChange={onChange}>
      {({ value }) => {
        return (
          <span tabIndex="0">
            <input
              placeholder="please select"
              style={{ width: 250 }}
              disabled={disabled}
              readOnly
              tabIndex="-1"
              className={classnames("form-control", inputClassName)}
              value={(value && value.format("DD/MM/YYYY HH:mm")) || ""}
            />
          </span>
        );
      }}
    </DatePicker>
  );
};

export default DateTimePicker;
