import { startOfDay, addDays } from 'date-fns';
import { RangeValue } from 'rc-picker/lib/interface';
import enLang from 'antd/es/date-picker/locale/en_US';
import { ReactComponent as RangePickerArrows } from 'assets/icons/range-picker-arrows.svg';
import { ReactComponent as RangePickerSuffixIcon } from 'assets/icons/range-picker-suffix-icon.svg';
import { DatePicker } from './elements';
import { DatePickerWrapper } from './view-date-picker.styled';

type Props = {
  startDate: Date;
  endDate: Date;
  onSave: (startDate: Date, endDate: Date) => void;
  disableBefore?: Date;
  minuteStep?: number;
  showTimeFormat?: string;
};

const { RangePicker } = DatePicker;
enLang.lang.ok = 'Confirm';

export const ViewDatePicker = ({
  startDate,
  endDate,
  onSave,
  disableBefore,
  minuteStep = 1,
  showTimeFormat = 'HH'
}: Props): JSX.Element => {
  const handleChange = (values: RangeValue<Date>): void => {
    if (values) onSave(values[0] as Date, values[1] as Date);
  };

  const disabledDate = (current: Date, disableBefore?: Date): boolean =>
    current > startOfDay(addDays(new Date(), 1)) || (!!disableBefore && disableBefore > current);

  return (
    <DatePickerWrapper>
      <RangePicker
        disabledDate={(current) => disabledDate(current, disableBefore)}
        inputReadOnly
        separator={<RangePickerArrows />}
        suffixIcon={<RangePickerSuffixIcon />}
        value={[startDate, endDate]}
        onChange={handleChange}
        allowClear={false}
        showTime={{ format: showTimeFormat, minuteStep }}
        locale={enLang}
      />
    </DatePickerWrapper>
  );
};
