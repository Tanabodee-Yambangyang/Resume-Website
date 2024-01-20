import './SkillBox.css';

import React from 'react';

interface SkillBoxProps {
  text: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ text }) => {
  return (
    <>
      <div className="default-skill-box">
        {text}
      </div>
    </>
  );
}

export default SkillBox;
