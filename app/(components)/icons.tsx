import EmailOutlined from "@mui/icons-material/EmailOutlined"
import FaxOutlined from "@mui/icons-material/FaxOutlined"
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined"
import LocationPin from "@mui/icons-material/LocationPin"
import MenuIconBase from "@mui/icons-material/Menu"
import CloseIconBase from "@mui/icons-material/Close"
import PhoneOutlined from "@mui/icons-material/PhoneOutlined"

const props = { "aria-hidden": true, className: "shrink-0", fontSize: "inherit" } as const

export const MapPinIcon = () => <LocationOnOutlined {...props} />
export const PhoneIcon = () => <PhoneOutlined {...props} />
export const FaxIcon = () => <FaxOutlined {...props} />
export const MailIcon = () => <EmailOutlined {...props} />
export const HospitalIcon = () => <LocationPin {...props} />
export const MenuIcon = () => <MenuIconBase {...props} />
export const CloseIcon = () => <CloseIconBase {...props} />
