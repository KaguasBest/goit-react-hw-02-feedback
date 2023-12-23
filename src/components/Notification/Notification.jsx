import { NotiWrap, Text } from './Notification.style';

export const Notification = ({ message }) => {
  return (
    <NotiWrap>
      <Text>{message}</Text>
    </NotiWrap>
  );
};
