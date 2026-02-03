// Popular pregnancy week comparisons

export interface ComparisonData {
  week1: number
  week2: number
  slug: string
  label: string
  category: 'consecutive' | 'milestone' | 'trimester'
}

export const popularComparisons: ComparisonData[] = [
  // Key milestone comparisons
  { week1: 8, week2: 12, slug: '8-vs-12', label: 'First tri ending', category: 'milestone' },
  { week1: 12, week2: 13, slug: '12-vs-13', label: '2nd tri starts', category: 'milestone' },
  { week1: 20, week2: 21, slug: '20-vs-21', label: 'Halfway point', category: 'milestone' },
  { week1: 20, week2: 24, slug: '20-vs-24', label: 'Anatomy scan period', category: 'milestone' },
  { week1: 27, week2: 28, slug: '27-vs-28', label: '3rd tri starts', category: 'milestone' },
  { week1: 36, week2: 37, slug: '36-vs-37', label: 'Full term', category: 'milestone' },
  { week1: 36, week2: 38, slug: '36-vs-38', label: 'Due date approaching', category: 'milestone' },
  { week1: 38, week2: 40, slug: '38-vs-40', label: 'Final weeks', category: 'milestone' },
  { week1: 13, week2: 27, slug: '13-vs-27', label: '2nd trimester span', category: 'trimester' },
  { week1: 1, week2: 12, slug: '1-vs-12', label: '1st trimester span', category: 'trimester' },
  { week1: 28, week2: 40, slug: '28-vs-40', label: '3rd trimester span', category: 'trimester' },
  { week1: 12, week2: 27, slug: '12-vs-27', label: 'Tri 1 to 2 end', category: 'trimester' },
  { week1: 16, week2: 20, slug: '16-vs-20', label: 'Gender reveal time', category: 'milestone' },
  { week1: 24, week2: 28, slug: '24-vs-28', label: 'Viability milestone', category: 'milestone' },
  { week1: 32, week2: 36, slug: '32-vs-36', label: 'Final month prep', category: 'milestone' },
  { week1: 10, week2: 14, slug: '10-vs-14', label: 'Early 2nd tri', category: 'milestone' },
  { week1: 4, week2: 8, slug: '4-vs-8', label: 'Early detection', category: 'milestone' },
  { week1: 6, week2: 10, slug: '6-vs-10', label: 'First ultrasound', category: 'milestone' },
  { week1: 30, week2: 34, slug: '30-vs-34', label: 'Late pregnancy', category: 'milestone' },
  { week1: 15, week2: 18, slug: '15-vs-18', label: 'Quickening time', category: 'milestone' },

  // Consecutive week comparisons (most searched)
  { week1: 7, week2: 8, slug: '7-vs-8', label: 'Week to week', category: 'consecutive' },
  { week1: 8, week2: 9, slug: '8-vs-9', label: 'Week to week', category: 'consecutive' },
  { week1: 9, week2: 10, slug: '9-vs-10', label: 'Week to week', category: 'consecutive' },
  { week1: 10, week2: 11, slug: '10-vs-11', label: 'Week to week', category: 'consecutive' },
  { week1: 11, week2: 12, slug: '11-vs-12', label: 'Week to week', category: 'consecutive' },
  { week1: 13, week2: 14, slug: '13-vs-14', label: 'Week to week', category: 'consecutive' },
  { week1: 14, week2: 15, slug: '14-vs-15', label: 'Week to week', category: 'consecutive' },
  { week1: 15, week2: 16, slug: '15-vs-16', label: 'Week to week', category: 'consecutive' },
  { week1: 16, week2: 17, slug: '16-vs-17', label: 'Week to week', category: 'consecutive' },
  { week1: 17, week2: 18, slug: '17-vs-18', label: 'Week to week', category: 'consecutive' },
  { week1: 18, week2: 19, slug: '18-vs-19', label: 'Week to week', category: 'consecutive' },
  { week1: 19, week2: 20, slug: '19-vs-20', label: 'Week to week', category: 'consecutive' },
  { week1: 21, week2: 22, slug: '21-vs-22', label: 'Week to week', category: 'consecutive' },
  { week1: 22, week2: 23, slug: '22-vs-23', label: 'Week to week', category: 'consecutive' },
  { week1: 23, week2: 24, slug: '23-vs-24', label: 'Week to week', category: 'consecutive' },
  { week1: 24, week2: 25, slug: '24-vs-25', label: 'Week to week', category: 'consecutive' },
  { week1: 25, week2: 26, slug: '25-vs-26', label: 'Week to week', category: 'consecutive' },
  { week1: 26, week2: 27, slug: '26-vs-27', label: 'Week to week', category: 'consecutive' },
  { week1: 28, week2: 29, slug: '28-vs-29', label: 'Week to week', category: 'consecutive' },
  { week1: 29, week2: 30, slug: '29-vs-30', label: 'Week to week', category: 'consecutive' },
  { week1: 30, week2: 31, slug: '30-vs-31', label: 'Week to week', category: 'consecutive' },
  { week1: 31, week2: 32, slug: '31-vs-32', label: 'Week to week', category: 'consecutive' },
  { week1: 32, week2: 33, slug: '32-vs-33', label: 'Week to week', category: 'consecutive' },
  { week1: 33, week2: 34, slug: '33-vs-34', label: 'Week to week', category: 'consecutive' },
  { week1: 34, week2: 35, slug: '34-vs-35', label: 'Week to week', category: 'consecutive' },
  { week1: 35, week2: 36, slug: '35-vs-36', label: 'Week to week', category: 'consecutive' },
  { week1: 37, week2: 38, slug: '37-vs-38', label: 'Week to week', category: 'consecutive' },
  { week1: 38, week2: 39, slug: '38-vs-39', label: 'Week to week', category: 'consecutive' },
  { week1: 39, week2: 40, slug: '39-vs-40', label: 'Week to week', category: 'consecutive' },

  // Additional key comparisons to reach 50
  { week1: 5, week2: 6, slug: '5-vs-6', label: 'Week to week', category: 'consecutive' },
]

export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  return popularComparisons.find((c) => c.slug === slug)
}

export function generateComparisonMetadata(week1: number, week2: number) {
  const data1 = require('./weekData').weeklyData.find((w: any) => w.week === week1)
  const data2 = require('./weekData').weeklyData.find((w: any) => w.week === week2)

  if (!data1 || !data2) return null

  const weekDiff = Math.abs(week2 - week1)
  const trimesterChange = data1.trimester !== data2.trimester

  return {
    week1,
    week2,
    data1,
    data2,
    weekDiff,
    trimesterChange,
    title: `Pregnancy Week ${week1} vs Week ${week2}: Development Comparison`,
    description: `Compare pregnancy week ${week1} vs week ${week2}. See baby size, weight, development milestones, symptoms, and what changes between these weeks.`,
  }
}
