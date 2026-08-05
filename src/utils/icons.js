import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPython,
  SiC,
  SiCplusplus,
  SiPhp,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiAndroidstudio,
  SiEclipseide,
  SiClickup,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { FiCode } from 'react-icons/fi'

const icons = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPython,
  SiC,
  SiCplusplus,
  SiPhp,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiAndroidstudio,
  SiEclipseide,
  SiClickup,
  FaJava,
  VscVscode,
}

export function getIcon(name) {
  return icons[name] || FiCode
}
