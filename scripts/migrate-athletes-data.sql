-- Migrate existing hardcoded athlete data into the database
-- This script populates the athletes table with the 3 existing athletes

INSERT INTO athletes (slug, name, title, bio, full_bio, stats, achievements, competition_history)
VALUES
  -- Sarah Thompson
  (
    'sarah-thompson',
    'Sarah Thompson',
    'National Champion',
    'Two-time Canadian Mas Wrestling champion with over 8 years of experience in the sport.',
    'Sarah Thompson discovered Mas Wrestling during her university years and has since become one of Canada''s most dominant competitors. Her journey began with a background in powerlifting and wrestling, which provided the perfect foundation for excelling in this unique sport.

    Known for her exceptional technique and mental toughness, Sarah has consistently performed at the highest level of competition. Her training regimen combines traditional strength training with sport-specific technique work, meditation, and strategic analysis of opponents.

    Beyond her competitive achievements, Sarah is passionate about growing the sport in Canada and regularly conducts workshops for newcomers. She believes that Mas Wrestling''s emphasis on technique over pure strength makes it accessible to athletes of all backgrounds.',
    '{"province": "Ontario", "city": "Toronto", "experience": "8 years", "weightClass": "70kg", "coach": "Viktor Petrov", "club": "Toronto Mas Wrestling Club"}'::jsonb,
    '["2023 Canadian National Champion", "2022 Canadian National Champion", "World Championships Bronze Medal (2023)", "World Championships 4th Place (2022)", "Provincial Champion 2021, 2022, 2023", "Outstanding Athlete Award 2023"]'::jsonb,
    '[
      {"year": "2023", "event": "World Championships", "result": "Bronze Medal"},
      {"year": "2023", "event": "Canadian Nationals", "result": "1st Place"},
      {"year": "2022", "event": "Canadian Nationals", "result": "1st Place"},
      {"year": "2022", "event": "World Championships", "result": "4th Place"},
      {"year": "2021", "event": "Canadian Nationals", "result": "2nd Place"},
      {"year": "2021", "event": "Provincial Championships", "result": "1st Place"}
    ]'::jsonb
  ),

  -- Marcus Chen
  (
    'marcus-chen',
    'Marcus Chen',
    'Rising Star',
    'Young talent making waves in the junior divisions with exceptional technique.',
    'Marcus Chen represents the future of Mas Wrestling in Canada. At just 19 years old, he has already achieved remarkable success in junior competitions and is making the transition to senior-level competition.

    Marcus''s approach to Mas Wrestling is highly analytical. He studies video footage of top international competitors and works closely with his coach to develop innovative techniques. His dedication to training and natural athletic ability have made him a standout performer.

    Currently studying Kinesiology at the University of British Columbia, Marcus balances his academic pursuits with intensive training. His goal is to compete at the World Championships and eventually coach the next generation of Canadian mas wrestlers.',
    '{"province": "British Columbia", "city": "Vancouver", "experience": "3 years", "weightClass": "80kg", "coach": "Elena Rodriguez", "club": "Pacific Mas Wrestling Academy"}'::jsonb,
    '["2023 Junior National Champion", "2023 Junior World Championships 5th Place", "Provincial Junior Champion 2022, 2023", "Rising Talent Award 2023", "University Championships Winner", "Technical Excellence Award"]'::jsonb,
    '[
      {"year": "2023", "event": "Junior World Championships", "result": "5th Place"},
      {"year": "2023", "event": "Junior Nationals", "result": "1st Place"},
      {"year": "2023", "event": "Provincial Championships", "result": "1st Place"},
      {"year": "2022", "event": "Junior Nationals", "result": "3rd Place"},
      {"year": "2022", "event": "Provincial Championships", "result": "1st Place"},
      {"year": "2021", "event": "Regional Championships", "result": "2nd Place"}
    ]'::jsonb
  ),

  -- David Rodriguez
  (
    'david-rodriguez',
    'David Rodriguez',
    'Veteran Competitor',
    '15-year veteran and coach, helping develop the next generation of Canadian mas wrestlers.',
    'David Rodriguez is a legend in Canadian Mas Wrestling, with a career spanning over 15 years of elite competition. His journey began in Calgary, where he discovered the sport through the local immigrant community from Yakutia.

    As a five-time national champion, David has represented Canada at numerous international competitions and has been instrumental in establishing training programs across Western Canada. His competitive achievements are matched only by his contributions as a coach and mentor.

    Now in the later stages of his competitive career, David focuses on developing young talent while still competing at the masters level. His Calgary-based academy has produced several national-level competitors and continues to be a hub for Mas Wrestling in Western Canada.',
    '{"province": "Alberta", "city": "Calgary", "experience": "15 years", "weightClass": "90kg", "coach": "Self-coached", "club": "Calgary Strength Academy"}'::jsonb,
    '["5x Canadian National Champion (2015, 2017, 2018, 2019, 2021)", "World Championships Silver Medal (2019)", "World Championships Bronze Medal (2018)", "Masters World Champion (2023)", "Coach of the Year Award 2022", "Sport Development Award 2020"]'::jsonb,
    '[
      {"year": "2023", "event": "Masters World Championships", "result": "1st Place"},
      {"year": "2021", "event": "Canadian Nationals", "result": "1st Place"},
      {"year": "2019", "event": "World Championships", "result": "Silver Medal"},
      {"year": "2019", "event": "Canadian Nationals", "result": "1st Place"},
      {"year": "2018", "event": "World Championships", "result": "Bronze Medal"},
      {"year": "2018", "event": "Canadian Nationals", "result": "1st Place"}
    ]'::jsonb
  )
ON CONFLICT (slug) DO NOTHING;
