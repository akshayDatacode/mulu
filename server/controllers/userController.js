const Contacts = require("../models/contactsModel")
const Agents = require("../models/agentsModel")

const getContacts = async (req, res) => {
  const { zipCode } = req.body
  try {
    const contacts = await Contacts.find({})
    return res.send({ contacts: contacts, success: true })
  } catch (error) {
    console.error(error)
    return res.send({ success: false })
  }
}

const getAgents = async (req, res) => {
  const { zipCode } = req.body
  try {
    const agents = await Agents.find({})
    return res.send({ agents: agents, success: true })
  } catch (error) {
    console.error(error)
    return res.send({ success: false })
  }
}

const getUserProfile = async (req, res) => {
  const { userId } = req.body
  let userprofile
  try {
    userprofile = await Contacts.findOne({ userId: userId })
    if (!userprofile) {
      userprofile = await Agents.findOne({ userId: userId })
    }
    return res.send({ contactProfile: userprofile, success: true })
  } catch (error) {
    console.error(error)
    return res.send({ success: false })
  }
}

exports.getContacts = getContacts
exports.getAgents = getAgents 
exports.getUserProfile = getUserProfile
