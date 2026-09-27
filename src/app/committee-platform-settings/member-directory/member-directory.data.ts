export interface CommitteeOption {
  committeeId: number;
  committeeName: string;
}

export interface DirectoryMember {
  memberId: number;
  name: string;
  mobile: string;
  email: string;
  relativeName: string;
  address: string;
  folioNo: string | null;
  committeeId: number;
  headsCount: number;
  joiningDate: string;
  isManager: boolean;
  joinedBy: number | null;
}

export const MOCK_COMMITTEES: CommitteeOption[] = [
  { committeeId: 1, committeeName: 'Community Growth Committee' },
  { committeeId: 18, committeeName: 'Family Savings Committee' }
];

export const MOCK_MEMBERS: DirectoryMember[] = [
  {
    memberId: 1,
    name: 'Aarav Mehta',
    mobile: '555-0101',
    email: 'aarav.mehta@example.com',
    relativeName: 'Rohan Mehta',
    address: '12 Lakeview Road, Pune',
    folioNo: 'F-001',
    committeeId: 1,
    headsCount: 1,
    joiningDate: '2026-07-20T15:35:59.800Z',
    isManager: false,
    joinedBy: null
  },
  {
    memberId: 102,
    name: 'Diya Shah',
    mobile: '555-0102',
    email: 'diya.shah@example.com',
    relativeName: 'Neel Shah',
    address: '48 Green Park, Mumbai',
    folioNo: 'F-002',
    committeeId: 18,
    headsCount: 1,
    joiningDate: '2026-07-20T15:49:13.751Z',
    isManager: false,
    joinedBy: null
  },
  {
    memberId: 103,
    name: 'Kabir Rao',
    mobile: '555-0103',
    email: 'kabir.rao@example.com',
    relativeName: 'Mira Rao',
    address: '7 Hill Street, Bengaluru',
    folioNo: 'F-003',
    committeeId: 18,
    headsCount: 1,
    joiningDate: '2026-07-20T15:49:13.910Z',
    isManager: false,
    joinedBy: null
  },
  {
    memberId: 104,
    name: 'Anaya Iyer',
    mobile: '555-0104',
    email: 'anaya.iyer@example.com',
    relativeName: 'Arjun Iyer',
    address: '23 Palm Avenue, Chennai',
    folioNo: null,
    committeeId: 18,
    headsCount: 1,
    joiningDate: '2026-08-11T18:44:41.753Z',
    isManager: false,
    joinedBy: null
  }
];