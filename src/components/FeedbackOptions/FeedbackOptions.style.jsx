import styled from 'styled-components';

export const FeedbackWrap = styled.div({
  width: 400,
  background: '#aaa',
  margin: 'auto',
});

export const FeedbackList = styled.ul({
  paddingTop: 40,
  paddingBottom: 40,
  padding: 20,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const FeedbackItem = styled.li({
  fontSize: 16,
});

export const Button = styled.button({
  fontSize: 20,
  padding: '10px 15px',
  border: '1px solid #393939',
  borderRadius: 4,
});
