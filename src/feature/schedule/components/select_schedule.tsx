import React, { SetStateAction } from 'react'
import { Schedule } from '../model/schedule'
import { Select, Option } from '@mui/joy';
import { useGetAllSchedulesQuery } from '../api/schedule_endpoint';

interface SelectScheduleProps {
    schedule?: Schedule;
    setSelectedSchedule: React.Dispatch<SetStateAction<Schedule>>;
}

const SelectSchedule: React.FC<SelectScheduleProps> = (props) => {
    const { data: schedules } = useGetAllSchedulesQuery({
        params: { siteId: "6909b1ef-c882-4749-8594-9c779a8deff6" },
    });
    const handleChange = (_: React.SyntheticEvent | null,
        newValue: string | null,) => {
        if (schedules && newValue)
            props.setSelectedSchedule(schedules?.filter(schedule => schedule.id == newValue)?.[0] ?? []);
    }
    return (
        <Select
            placeholder="Choose Work Item…"
            onChange={handleChange}
            sx={{ width: 300 }}
        >
            {schedules?.map((schedule, index) => (
                <Option key={index} value={schedule.id}>
                    {schedule.name}
                </Option>
            ))}
        </Select>
    )
}

export default SelectSchedule;