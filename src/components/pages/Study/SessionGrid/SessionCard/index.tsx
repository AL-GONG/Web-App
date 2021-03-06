import { useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";

import Session from "../../../../../types/Session";
import DateLabel from "../../../../atoms/DateLabel";
import Wrapper from "../../../../blocks/Wrapper";
import LinkButton from "../../../../atoms/LinkButton";

function getHourMinSeconds(date: Date) {
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  return `${hour}:${min}:${sec}`;
}

export default function SessionCard({ id, name, start, end }: Session) {
  const [time, setTime] = useState(end.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      if (time < 0) {
        clearInterval(interval);
        return;
      }
      setTime(end.getTime() - new Date().getTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [end]);

  return (
    <Grid item md={3} xs={6}>
      <Wrapper>
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={600}>
            {name}
          </Typography>
          <DateLabel start={new Date(start)} end={new Date(end)} />
          {time < 0 ? (
            <LinkButton
              to={String(id)}
            >
              기간 종료
            </LinkButton>
          ) : (
            <LinkButton
              color="primary"
              to={String(id)}
            >
              {getHourMinSeconds(new Date(time))}
            </LinkButton>
          )}
        </Stack>
      </Wrapper>
    </Grid>
  );
}
