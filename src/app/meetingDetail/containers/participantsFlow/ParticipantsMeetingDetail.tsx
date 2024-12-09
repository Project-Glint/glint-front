import { ButtonFooter } from 'components';
import { useFormContext } from 'react-hook-form';
import { MeetingDetailForm } from 'types';

interface ParticipantsMeetingDetailProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const ParticipantsMeetingDetail = ({
  step,
  setStep,
}: ParticipantsMeetingDetailProps) => {
  const { handleSubmit } = useFormContext<MeetingDetailForm>();

  const handleClickNext = () => {
    setStep(step + 1);
  };
  return (
    <>
      <ButtonFooter
        label="참가신청"
        isNextButtonEnabled={true}
        handleClickNext={handleSubmit(handleClickNext)}
      />
    </>
  );
};

export default ParticipantsMeetingDetail;
