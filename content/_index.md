---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: Welcome to HiEN's website
      cta:
        label: '**Get Started**'
        url: https://wowchemy.com/templates/
      text: |-
        <!--GitHub Button JS-->
        <script async defer src="https://buttons.github.io/buttons.js"></script>
    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true
  {style="text-align: justify;"}
  - block: about.avatar
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      # Override your bio text from `authors/admin/_index.md`?
      text:
  
  - block: features
    content:
      title: Skills
      items:
        - name: Python
          description: 60%
          icon: python
          icon_pack: fab
        - name: Geospatial Analysis
          description: 60%
          icon: satellite
          icon_pack: fas
        - name: R
          description: 60%
          icon: r-project
          icon_pack: fab
  
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Junior AI/Software Engineer
          company: Bayerische Landesanstalt für Wald und Forstwirtschaft
          company_url: '[Department: Biodiversity, conservation and wildlife management](https://www.lwf.bayern.de/biodiversitaet/wildtiermonitoring_jagd/index.php)'
          company_logo: org-gc
          location: Munich, DE
          date_start: '2020-03'
          date_end: ''
        - title: Master Thesis Candidate @ FloodAdaptVN
          company: German Aerospace Center (DLR)
          company_url: '[Team: Coasts and River Basins](https://www.dlr.de/eoc/en/desktopdefault.aspx/tabid-11927/20992_read-64483/)'
          company_logo: org-x
          location: Wessling, DE
          date_start: '2022-05'
          date_end: '2022-12'
        - title: Student Research Asssitant @ Professur für Urbane Produktive Ökosysteme
          company: Technical University of Munich
          company_url: '[UPE Lab](https://upe-lab.de/)'
          company_logo: org-x
          location: Freising, DE
          date_start: '2021-05'
          date_end: '2022-09' 
    design:
      columns: '2'
  
  - block: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Certs'
      subtitle:
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - certificate_url: https://drive.google.com/file/d/1PF5C0zHvzEPChSL-LaVRDVQEUDjlKyWJ/view
          date_end: ''
          date_start: '2022-08-30'
          description: ''
          organization: NASA’s Applied Remote Sensing Training (ARSET)
          organization_url: https://appliedsciences.nasa.gov/what-we-do/capacity-building/arset
          title: ARSET - Evaluating Ecosystem Services with Remote Sensing
          url: 'https://appliedsciences.nasa.gov/join-mission/training/english/arset-evaluating-ecosystem-services-remote-sensing'
        - certificate_url: https://drive.google.com/file/d/1SOzrgP4Aq7uK7CMEDVbQVVFBrxCiefoe/view
          date_end: ''
          date_start: '2022-08-11'
          description: ''
          organization: NASA’s Applied Remote Sensing Training (ARSET)
          organization_url: https://appliedsciences.nasa.gov/what-we-do/capacity-building/arset
          title: ARSET - Satellite Remote Sensing for Measuring Urban Heat Islands and Constructing Heat Vulnerability Indices
          url: 'https://appliedsciences.nasa.gov/join-mission/training/english/arset-satellite-remote-sensing-measuring-urban-heat-islands-and'
        - certificate_url: https://drive.google.com/file/d/1_egDrNGp1GvczxOQeXSgMwXTxk1PlFJK/view
          date_end: ''
          date_start: '2022-09'
          description: ''
          organization: ESA - EO College
          organization_url: https://eo-college.org/
          title: 'Land in Focus – Forest Ecosystems'
          url: 'https://eo-college.org/courses/forest-monitoring/'
        - certificate_url: https://drive.google.com/file/d/1W7K--YAk46SVf-YHqAwSK054yZUYQMRs/view
          date_end: ''
          date_start: '2022-09'
          description: ''
          organization: ESA - EO College
          organization_url: https://eo-college.org/
          title: 'Land in Focus – Agriculture & Food'
          url: 'https://eo-college.org/courses/agriculture-and-food/'
    design:
      columns: '2'
  
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  
  - block: collection
    id: publication
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
      # Contact (add or remove contact options as necessary)
      email: hien.nguyen@tum.de
      address:
        city: Munich
        region: Bayern
        postcode: '85354'
        country: Germany
        country_code: DE
      office_hours:
        - 'Weekdays 08:00 to 17:00'
---
