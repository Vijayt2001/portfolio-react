import styles from './SkillsStyles.Module.css'
import checkMarksIcon from "../../assets/checkmark-light.svg"
// import checkMarksIcon from "../../assets/checkmark-dark.svg"
import SkillList from '../../common/SkillList'


function Skills() {
  return (
    <section id="skills" className={styles.container}>
        
        <h1>Skills</h1>
        <div className={styles.SkillList}>
            <skillList src={checkMarksIcon} skill = "HTML" />

        </div>
        </section>
  );
}

export default Skills;
