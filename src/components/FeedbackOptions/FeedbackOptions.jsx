import {
  Button,
  FeedbackItem,
  FeedbackList,
  FeedbackWrap,
} from './FeedbackOptions.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrap>
      <FeedbackList>
        {options.map(option => {
          return (
            <FeedbackItem key={option}>
              <Button
                type="button"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </Button>
            </FeedbackItem>
          );
        })}
      </FeedbackList>
    </FeedbackWrap>
  );
};
