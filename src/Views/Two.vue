<template>
  <div class="container">
      
      <div class="cols">
        <div class="col h--full f-justify--center f-direction--column">
          <div class="intro">
            <h1 class="-md">
              <span class="subtitle">Part 2</span>
               Input and reflect
            </h1>
            <p class="-lg">In part two we introduce you to some interview data that was collected as part of a community project we worked on, and on which our book is based.</p>
          </div>
          <div class="icon__scroll">
            <img src="@/assets/arrow-down.svg" alt="">
          </div>
        </div>
        <div class="col f-direction--column f-justify--center m-hidden">
          <div class="img img--intro">
            <img class="" src="@/assets/head.png">
          </div>
        </div>
      </div>

      <section>
        <div class="cols f-align--start">
          
          <div class="col-1 -m-bottom">
            <div class="video">
                <div class="video__wrapper" @click="showVideo($event)">
                  <img src="@/assets/dasha.png" alt="">
                  <i></i>
                </div>
                <div class="video__popup">
                  <div class="video__popup__wrapper" @click="closeVideo($event)"></div>
                  <div class="video__popup__frame">
                    <iframe data-src="https://www.youtube.com/embed/gVZhRXhqBcA?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="video__popup__close" @click="closeVideo($event)"></div>
                </div>
            </div>            
          </div>

          <div class="col-3 f-justify--center">
            <article>
              <p>We show you how we analysed this data and then introduce you to some recommendations that we made as a result of our study of the community project data. We ask you to reflect on our recommendations and write a short paragraph about what you might do differently in your second interview.</p>
              <p>In the text box below is some background to a community project called ‘York’s Hidden Stories’ that we worked on and wrote about in our book. The numbers refer to page numbers in the printed book, in case you want to reference it in your own work.</p>
              <p>As you read the text below, think about what you might include in a ‘background’ section to an account of your own interview project (the rationale for your research? Background information about your interviewee? Background information about you? Background information about your relationship with the interviewee? And so on)</p>
            </article>
          </div>
        </div>
      </section>

      <div class="block -bg -book">
        <section>
          <div class="cols">
            <div class="col">
              <div>
                <div class="book">
                    <h3>Commumnity build</h3>
                    <p>The community project that formed the basis of our study was initiated as a response to research commissioned by the Joseph Rowntree Foundation’s York Grants Committee in 2010. The research aimed to give a more accurate picture of York's Black, Asian and M inority Ethnic population, and to make related recommendations to local authorities. The results of the research revealed that York's population was much more diverse than had previously been suggested; identifying 78 different minority first languages spo ken in the City and estimating the minority ethnic population at approximately eleven per cent of York's total population. This figure was higher than that suggested by the 2001 census, in which only 2.1 per cent of respondents identified themselves as not White or White other, and 4.9 per cent as not White British, a much lower percentage than the UK average. These results were confirmed by statistics published from the 2011 census, which confirmed that 90.2 per cent of York’s population identified themsel ves as White British. In the report on their research, Craig et al emphasised the need for York to strengthen its commitment to racial equality and diversity, with a view to making a positive impact on the lives of ethnic minority groups in the City.</p>
                    <p>The Centre for Global Education York, the initiators of the community project that provides the case study explored in this book, is a charity that works with the local community to offer support and training aimed at developing understanding of global issues. More specifically, it ‘aims to provide support, challenge, training and learning opportunities that allow interactive involvement with a variety of global educational projects and events’ (Centre for Global Education York, 2014). The Centre has been runni ng for more than thirty years, and for the past twenty years has been based at York St John University. As a ‘not - for - profit organisation’, it is overseen by a group of voluntary directors, and its work is delivered by self - employed associates who manage g rant - funded projects (Centre for Global Education York, 2014). The work of the Centre is mainly carried out in local schools, colleges and universities. In 2012 - 14, the Centre engaged with a wider audience through the community - based York’s Hidden Stories project, funded by the Joseph Rowntree Foundation, Comic Relief, Community York, and York St John University.</p>
                    <p>The York’s Hidden Stories project was a response to the research, cited above, that emphasised the need for York to strengthen its commitment to racial equality and diversity (Craig et al. , 2010). The aim of the project was to capture and share the stories of York’s Black, Asian and Minority Ethnic residents, and involved fifteen participants who were interviewed about their experiences of moving to, and living in, York. On completion of the project, the project leaders’ evaluation suggested that their project had, ‘recorded, shared and celebrated the cultural heritage of York’s unseen and often unknown multicultural community that could result in disadvantage', noting that, ‘these individuals (the Black, Asian and Minority Ethnic participants) were trained to impart their unique cultural memories and experiences which are now part of York’s Community’</p>
                    <p>The data that was used in our study consists of audio recordings of semi - structured interviews that were collected by the Centre for Global Education York as part of the York’s Hidden Stories project. In total, there are fifteen interviews in which one interviewee and two project leaders participate . Each interview lasts approximately one hour. Each participant was asked the same set of questions, see chapter three – Methodology, covering general information about the participant, their values, their life in their country of origin, and the changes t hey may have experienced since coming to York. The interviews aimed to provide an insight into peoples’ memories of their ‘home’ countries, and their experience of moving to and living in York.</p>
                    <h3>The data</h3>
                    <p>The case study used data collected by the Centre for Global Education as part of the York’s Hidden Stories project and consisted of fifteen semi - structured interviews, conducted by two project leaders who were both present at each interview, with the fifteen project participants. All the participants had been living in York for between two and fifty years, and had originally come to York from Africa, Asia, Latin America, the Caribbean or Europe.</p>
                    <p>The project participants took part in the York’s Hidden Stories project through a series of workshops over th e course of six months. During that time the participants ‘were trained to impart their unique cultural memories and experiences which are now part of York’s Community’ (Centre for Global Education York, 2014). Towards the end of the community project, the participants were interviewed by the project leaders. Each participant was asked the following set of twenty - five questions (and some were asked additional questions):</p>
                    <ol>
                      <li>Where are you from?</li>
                      <li>Tell us about your name, what does it mean?</li>
                      <li>Where do you get your values from?</li>
                      <li>What do you treasure the most in life?</li>
                      <li>Has coming to York changed your values and what you treasure?</li>
                      <li>What do you treasure the most about your home country?</li>
                      <li>What do you treasure about York?</li>
                      <li>Is there anything you feel you need in life?</li>
                      <li>If I could grant you a wish, what would it be for you and for the world?</li>
                      <li>What skills, talents and gifts do you think you have?</li>
                      <li>Do you think those skills have been helpful during your life in York?</li>
                      <li>If you hadn’t come to live in York, do you think you would be a different person?</li>
                      <li>What differences do you see in citizens from your country and here in the UK?</li>
                      <li>Who do you think you are?</li>
                      <li>What were your first impressions of York?</li>
                      <li>Was it easy to move to York?</li>
                      <li>When you arrived in York, were there any people who helped you?</li>
                      <li>If you could bring something from home to York, what would it be?</li>
                      <li>If you could take something back home from York, what would it be?</li>
                      <li>Do you think there is anything distinctive about people in York/Yorkshire?</li>
                      <li>Are there any barriers you had to overcome in life?</li>
                      <li>What helped you to overcome barriers?</li>
                      <li>Has living in York created any barriers for you?</li>
                      <li>Has living in York helped you to overcome certain barriers?</li>
                      <li>Do you think in your home country that there are barriers that people have to overcome that are different or the same as for people in the UK?</li>
                      <li>In five years’ time, where do you think you will be in life?</li>
                    </ol>
                    
                    <p>Most of the project participants, and both i nterviewers, were multi - lingual. All the interviews were conducted in English and audio recorded. The length of the recordings is outlined in a table below.</p>


                    <table>
                      <thead>
                        <tr>
                          <td></td>
                          <th>Pseudonym</th>
                          <th>Continent of origin</th>
                          <th>Interview length</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Diara</td>
                          <td>Europe</td>
                          <td>41 minutes</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Chardon</td>
                          <td>Central America</td>
                          <td>1 hour 2 minutes</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Bao</td>
                          <td>Asia</td>
                          <td>48 minutes</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Chima</td>
                          <td>Africa</td>
                          <td>50 minutes</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Yun</td>
                          <td>Asia</td>
                          <td>50 minutes</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Chris</td>
                          <td>Africa</td>
                          <td>1 hour 7 minutes</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Zenith</td>
                          <td>Africa</td>
                          <td>1 hour 6 minutes</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Alex</td>
                          <td>South America</td>
                          <td>1 hour 34 minutes</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>Jamal</td>
                          <td>Africa</td>
                          <td>58 minutes</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>Andri</td>
                          <td>Asia</td>
                          <td>50 minutes</td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>Michi</td>
                          <td>Asia</td>
                          <td>43 minutes</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>Sage</td>
                          <td>Europe</td>
                          <td>46 minutes</td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>Sasha</td>
                          <td>Europe</td>
                          <td>51 minutes</td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>Jessi</td>
                          <td>Europe</td>
                          <td>1 hour 7 minutes</td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>Hanzila</td>
                          <td>Africa</td>
                          <td>11 minutes</td>
                        </tr>
                      </tbody>
                    </table>

                    <p>It is important to note that the interviewees and interviewers were already familiar with each other prior to the interviewing, given that the interviewers had had a chance to build relationships with their interviewees over the course of six months of wor kshops and events. Garton and Copland (2010) refer to these types of interviews, where there is a prior relationship between interviewers and interviewees, as 'acquaintance interviews'. They stress that a prior relationship, or lack of one, can have a prof ound effect on the data that gets generated in interview talk, and suggest that participants of acquaintance interviews should be made aware of the impact a prior relationship may have on the interaction. Mann (2016) argues that familiarity can be both an advantage and a disadvantage. Where the interviewer enters in to the interaction in the hope of achieving a deeper understanding of their interviewee’s perspective (what we describe in chapter one as a ‘romantic’ assumption), it can help them to feel bette r able to understand what the interviewee ‘really means’. Where the interviewer enters in to the interaction with a neo - positivist perspective, familiarity may feel like a disadvantage, in the fear that they will be encouraged to engage with their intervie wee’s responses through the lens of their own prior experiences. For researchers who enter into an acquaintance interview with a constructionist perspective, familiarity is neither an advantage or a disadvantage, but an inevitable feature of all interactio n that is to be noted (and perhaps studied, as part of the analysis of the interview data)</p>

                    <p>We assume, but can’t be sure, that the leaders of the community project that resulted in the fifteen interviews built relationships with the participants through workshop and events in the six months prior in order to deliberately create ‘acquaintance’ interviews, with a view to achieving a deeper ‘understanding’ of the stories that were generated. It may be the case, however, that the project leaders built these r elationships simply in order to create longer answers, generating more data for analysis, or that they saw the six months of workshops and events held prior to the interviews as a separate stage of the project, with no consequences for the interviews. It i s also possible, that the project leaders were aware of the transformative power of interviews; aiming to use their interview data and any discussion of their findings to benefit the project participants, by raising awareness of aspects of their lives or c hallenging interpretations of their experience in order to change the attitudes of their fellow residents of the City of York.</p>
                    
                    <p>Given that we are now unable to ask our clients about their rationale for the design of their project, we would advise other app lied linguists (including ourselves in future) to discuss the design of a project before it begins, so that project leaders, participants and researchers are, as far as possible, aware of the assumptions behind, and the consequences of, their decisions fro m the very start.</p>

                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="book__more" @click="readMore($event)">
          <div class="_wrap">
            <span>Read more</span><span>Show less</span><span></span>
          </div>
        </div>
      </div>
      
      
      <section>
        <div class="cols">
          <div class="col f-justify--center">
            <div class="content">
              <p>Based on the data described above we had two research questions that we asked in our study </p>
              <ul class="tasks">
                <li>What themes occur in the interviews with York’s Black, Asian and Minority Ethnic residents on the topics identified by the client?</li>
                <li>How do the interviewers’ contributions shape the interaction with the interviewees?</li>
              </ul>
              <p>Each of the questions required two different approaches to data analysis: thematic analysis and conversation analysis.</p>
              <p>The text in the box below is from our book and, again, the page numbers are there in case you want to reference our work.</p>
              <p>In this extract, we show how we analysed our data using two different approaches to analysis. While you are reading the text below, think about the possible advantages and disadvantages of our choices. Think also about whether you might want to use either of these two approaches to analyse your own data:</p>
            </div>
          </div>
        </div>
      </section>




      <!-- BOOK -->
      <div class="block -bg -book">
        <section>
          <div class="cols">
            <div class="col">
              <div class="book">
                  <h3>Thematic analysis</h3>
                  <p>We used what the project leaders called ‘thematic analysis’ to answer research question one of our study, in order to summarise answers on the topics identified by our client.  </p>
                  <p>Thematic analysis is a common way of analysing qualitative data in order to report what seems to the analyst to be the key issues (or ‘phenomena’) that are present in the data (Gibbs, 2007). More specifically, it has been described as a method of ‘identifying, analysing and reporting patterns (themes) within data’ (Braun and Clarke, 2006:79). In a later version of their 2006 paper, Braun and Clarke (2019) describe a number of different approaches to thematic analysis, which they are keen to delineate, and distinguish ‘fully realised themes’ from ‘confusing summaries of data domains or topics’ (2019:589). </p>
                  <p>A ‘fully realised’ approach to thematic analysis is designed to be inductive, or ‘bottom-up’. The first stage is usually to code the interview transcript for important words, phrases or ideas. Boyatzis (1998:63) defines these words, phrases or ideas as ‘the most basic segment, or element, of raw data or information that can be assessed in a meaningful way regarding the phenomenon’. These elements are then grouped into larger categories and the relationship between the elements within the categories, and the categories themselves, are explored. In the presentation of the findings of a thematic analysis, extracts from the data may be used to exemplify the categories of which they form a part. Thematic analysis is usually conducted in the following stages (see Robson, 2011): </p>
                  <ul>
                    <li>familiarisation with the data: at this stage, the researcher reads and/or listens to the data a number of times, making notes of initial ideas</li>
                    <li>generation of initial codes: during this stage, extracts from the data are coded across the dataset, with similar extracts being assigned the same code </li>
                    <li>identification of themes: this stage involves organising codes into potential themes</li>
                    <li>construction of thematic networks: at this stage a thematic map of the data is developed</li>
                    <li>integration and interpretation: during this stage the patterning of (or relationship between) the themes is explored, which are then summarised and interpreted with reference to the context of the data and/or other, similar, research findings.</li>
                  </ul>

                  <p>In contrast to this ‘bottom-up’ approach, in the case study described in this book, the client had already identified three themes prior to our analysis. The themes that were of interest to the client were: reasons for immigration to York; participants’ values in life; and what the participants said about any barriers in their lives. Given that the themes were pre-determined by the client and the analysis was linked to the client’s needs, a deductive, or ‘top-down’ approach to the thematic analysis was conducted. This approach runs the risk of providing ‘confusing summaries of data domains or topics’ (Braun and Clarke, 2019:589), but it did provide findings in a format that met the needs of our client. Furthermore, when combined with the findings of research question two, we hope that our summaries on the topics identified by the project leaders are shown (including to the project leaders) to be what they ‘are’: different stories about stories.  </p>

                  <h3>Conversation analysis </h3>
                  <p>Research question two asked: How do the interviewers’ contributions shape the interaction with the interviewees? The approach we took to this question is conversation-analytic, drawing on the main principles of conversation analysis: turn-taking, turn design and sequential organisation of talk (Sacks et al., 1974).  As described in chapter one, the main methodological resource of conversation analysis lies in interpreting the understanding of a previous talk in the next turn (Sacks et al., 1974).   </p>
                  <p>The rationale for applying a conversation analysis-informed approach was to enable us to take a very close look at the details of the interview data, in order to study the ways in which specific interactional features had an effect on the progress of the interviews. As described by ten Have (1990), conversation analysis provides a structured way of studying the details of interactional extracts from a dataset enabling researchers to identify various insights in the data. Research question two required us to look at how the interviews started, and how they moved along, as well as how they got to their end. Conversation analysis’s focus on sequences helped us to see how questions led to answers, which in turn led to further questions; allowing us to pay attention to the ‘journey’ of the stories the participants told. </p>
                  <p>Based on ten Have’s (1990) model, the following six stages were followed in analysing the data for our study:  </p>
                  <h4>Stage one </h4>
                  <p>The first step consists of making audio or video recordings of conversations. In the case of our study, this stage was already completed by the project leaders prior to this study and the recorded interviews were shared with the researchers. </p>
                  <h4>Stage two </h4>
                  <p>The second step is to produce a transcript of the recordings. There were two different transcriptions made for our study. Firstly, a verbatim transcription of all interviews was produced and shared with the community project leaders. Secondly, selected episodes from verbatim transcriptions were transcribed using conversation analysis transcription conventions. The selection of the episodes for transcription is discussed below. </p>
                  <h4>Stage three </h4>
                  <p>Stage three involves building a collection of extracts for analysis. There are a number of considerations to be made at this stage. For instance, ten Have (1990) suggests that a good starting point for researchers might be to focus thier attention on conversation openings or closings, or to select sequential structures with an interesting conversational phenomenon, for example overlaps, laughter or long pauses. Gail Jefferson referred to such selections as ‘virtuoso moments'; these are 'episodes that strike the observer as being carried out in a particularly felicitous manner' (ten Have, 2007:38). </p>
                  <p>In the case of our study, all the interviews were listened to in order to identify sections of the interviews in which 'values' and 'barriers' were mentioned. In these sections, turn-taking sequences were examined and interesting conversational phenomena were noted, leading to the selection of five extracts, which are presented for detailed analysis in chapter four. The data from the 'reasons for immigration' section was not used because, in the majority of cases, the recordings of the interviews started with participants introducing themselves and explaining their reasons for immigrating. Therefore, there was no interaction between interviewees and interviewers to analyse.  </p>
                  <h4>Stage four </h4>
                  <p>Stage four is concerned with the initial analysis of the selected extracts, with a particular focus on the construction of turns, pauses, overlaps, repair and any other ’disturbances’ in the fluent working of the turn-taking system. ten Have (1990:9) describes this stage as an interpretation of the data which is 'specifically directed at a typification of what the utterances that make up the sequence can be held to be 'doing' and how these 'doings' interconnect'.  </p>
                  <h4>Stage five </h4>
                  <p>At this stage, further analysis is developed, combining the initial analysis from stage four with the researcher’s relevant knowledge about the research participants, in order to develop a more detailed understanding of the selected extracts.  </p>
                  <h4>Stage six </h4>
                  <p>Stage six of our study involved extending the analysis made in step four and five by comparing our data with similar or dissimilar examples found in other conversation analysis studies. ten Have (1990) highlights the importance of this stage for conversation analysis researchers, as it allows for the building of a collection of similar extracts to support a systematic comparison.  </p>

              </div>
            </div>
          </div>
        </section>
        <div class="book__more" @click="readMore($event)">
          <div class="_wrap">
            <span>Read more</span><span>Show less</span><span></span>
          </div>
        </div>
      </div>


      <section>
        <div class="cols">
          <div class="col f-justify--center">
            <div class="content">
              <p>The outcome of our thematic analysis was a series of summaries for each interview highlighting the main themes that occurred in their interviews as well as a list of themes that were common for all the interview.  </p>
              <p>As part of the conversation analysis we presented five conversation extracts in our book, we’ve selected one of them for you to study. While you are reading the extract, think about these questions: </p>
              <p>How easy is the transcript to read? What details of the spoken interaction have we included? What are some of the details that may have been excluded? What do you notice about the contribution of the interviewee? What do you notice about the contribution of the interviewer? </p>
              <p>Here is a key to the symbols we have used in the transcription: </p>
              <Dictionary/>
            </div>
          </div>
        </div>
      </section>


      <!-- BOOK -->
      <div class="block -bg -book">
        <section>
          <div class="cols">
            <div class="col">
              <div class="book">
                  <h3>Conversation analysis: Extract 2 </h3>
                  <p>Extract two was taken from the beginning of the interview. The question that appeared prior to the one in the extract below was about how moving to the UK changed the IE’s values and treasures. The extract below starts with a new question about what the IE really treasures about their country of origin. </p>

                  <Transcription/>

                  <p>In the extract above, the IR begins a turn with a question 'is there anything in particular that you really do treasure about [country] then?'. What can be noted in lines 1-2 is that the IR is inviting the IE to think of any answer by saying the word anything, however it is followed by an invitation to think of something specific by placing an emphasis on in particular and the two pauses, which add further emphasis. In line 3, there is a significant pause before a request for clarification from the IE follows in line 4 with a repair initiator any particular. In line 5, the IR replies with anything which is followed by a pause. The pause is a potential transition relevance place that provides an opportunity for the IE to proceed with a reply. However, it is a very short pause and as the IE is silent and the IR carries on with a list of candidates for anything by suggesting, 'you know it could be food, music, people'. In line 6, the IE begins a turn with an overlap 'yes, yes I love the music', selecting music from the list offered by the IR in the previous turn. In line 8 and 9 there is an acknowledgment token mm and a pause, which are interpreted by the IE as an invitation to continue their turn in line 10. It starts with a hesitation, but elicits more details as the IE continues talking in lines 10-15 with the help of backchanneling tokens such as ‘right’ and ‘yeah’ from the IR to indicate active listening. Back channelling (also known as response tokens, see Gardener, 2001; Peter and Wong, 2015) is a very useful technique for interviewers to use to encourage more detailed answers. The extract ends with the IR’s next question. </p>
                  <p>In the extract above, we observe how the IR‘s contribution in line 5, which may have been an attempt to clarify a problem for the IE, influences the IE’s choice of topic. If we considered the exchange in lines 1-5 in the context of everyday interaction, it could be argued that providing a list of words is a useful strategy, likely to be successful in explaining what is meant by anything. Furthermore, in a reflective vignette featured in Steve Mann’s book (2016:25) one researcher comments on his own use of a 'complex, multi-layered question' as providing the interviewee with more interactional resources to respond to and more thinking time. Research on elaborate questions in focus groups also suggest that, participants may find it helpful to be provided with multiple alternative suggestions to respond to (Puchta and Potter, 1999). However, Puchta and Potter (1999) highlight that the use of elaborate questions in focus groups is a very organised strategy of eliciting desired answers. Arguably, in an interview situation, this particular strategy could be less useful, perhaps even undermining of the validity of a subsequent thematic analysis of the IEs’ responses. Therefore, this extract is another example of the potential constraining effect the IR’s contribution might have on the IE talk. It illustrates a different type of constraining from the one seen in the first extract, which is achieved by offering a list of candidate suggestions. In this extract, the trigger of the constraining contribution also differs; it is after the IE asks for a clarification in line 4 'any in particular' that the IR provides a list of possible answers. It could be argued that in line 4, the IE could have been pausing for thought. However, it was interpreted by the IR as indicating a need for clarification, and an explanation followed. </p>
                  <p>In Line 13 we see the IE using direct reported speech 'oh mammy put English one on ((laughter))' to describe that their children ask them to change music in the car.  Coulmas (1986) outlines that direct reported speech recalls on the original utterance by claiming the exact words used by the initial speaker. Here the IE is using the words 'oh [parent]’ to indicate that it is their children’s talk that is being reported. The use of a turn initial oh, also referred to as 'change-of-state-token' by Herritage (1984), at the beginning of line 13 announces a shift from IE own speech to one said by their children. Holt (1996:228) argues that direct reported speech is often used to 'provide evidence that supports the speaker’s version of an event'. In case of this extract it is possible to argue that the IE is using the direct reported speech to support their statement in line 11 that their children don’t like them they play the music from their country of origin in the car. Holt (2017) also argues that speakers use direct reported speech to engage the listener in storytelling. </p>
                  <p>What happens in line 13 can also be described as an example of 'conversationalization' in the interviewee’s utterance. Conversationalization is described by Lee (2003:58) as a local discursive practice where an interviewee incorporates someone else's voice into their response. Such utterances are usually initiated by respondents with discourse markers oh, sure, OK, and yeah. Often those discourse markers are used to indicate the speaker’s response to a previous turn by another speaker. However, Lee (2003) shows data extracts where the above discourse markers are responses to a hypothetical turn by a constructed interlocutor. This is also observed in line 12 of the above extract which starts with 'oh [parent] put English one on ((laughter))’, where oh marks a transition to the interviewee’s child’s voice. The oh-prefaced response enables the interviewee to elaborate their view and also to suggest that their opinion was formed taking opposing views into account, making their response sound more credible. Lee (2003) demonstrates how interviewees use what he calls conversationalization in order to compensate for the constraints imposed by the role of an interviewer. Interviewees are aware that an interviewer can’t resort to ordinary conversation, hence why they make use of conversationalization to covertly enable the interviewers to engage in the conversation, 'but with the benefit that this engagement is subject to their control' (Lee, 2003:60). </p>

              </div>
            </div>
          </div>
        </section>
        <div class="book__more" @click="readMore($event)">
          <div class="_wrap">
            <span>Read more</span><span>Show less</span><span></span>
          </div>
        </div>
      </div>


       <section>
        <div class="cols">
          <div class="col f-justify--center">
            <div class="content">
              <p>The result of our conversation analysis was a series of recommendations for interviewers to consider if planning to use interviews for a project or research. The text in the box below outlines our recommendations. As you read through the extract, ask yourself whether any of the recommendations feel relevant to your own experience of interviewing? </p>
            </div>
          </div>
        </div>
      </section>



      <!-- BOOK -->
      <div class="block -bg -book">
        <section>
          <div class="cols">
            <div class="col">
              <div class="book">
                  <h3>Recommendations </h3>
                  <p>An outcome of the conversation analysis that was conducted to address research question two was a set of recommendations for community workers who want to use interviews as part of their projects. It is important to acknowledge that these are recommendations for possible noticings that are based on our analysis of the data, collected in one context, and are not, therefore, presented as prescriptions for the management of all interviews. Instead, they are representative of a type of sensitivity (to the interactional effects of questions, answers and responses to answers) that interviewers can aim to develop; sensitivity that is deployed both ‘online’, as the interview is taking place and ‘offline’ when the interviewer analyses/uses their data.</p>
                  <p><i>Recommendation 1</i>: if an interviewer notices that they have made a specific contribution, such as offering a word that narrowed the range of choices that the interviewee was presented with, they can consider following it up with a more general contribution such as ‘is there something else you want to say?’ or ‘do you have some more comments about this topic?’. </p>
                  <p><i>Recommendation 2</i>: if an interviewer notices that an interviewee problematises their question, an interviewer can consider replying with ‘yes’ or ‘anything’ followed by a pause. This way an interviewer can avoid adding more information to the original question and focus on confirming that the interviewee has satisfied themselves that they have an understanding of the question. </p>
                  <p><i>Recommendation 3</i>: if an interviewer notices that their response to an interviewee’s answer was overtly judgmental or seemed to change the direction of the answer, they can try repeating the original question. This, of course, could result in the interviewee repeating their answer or changing it. However, this technique may provide an opportunity for the interviewee to add to their answer. An additional suggestion here could be for an interviewer to consider asking the interviewee to summarise their answer.  </p>
                  <p><i>Recommendation 4</i>: if an interviewer notices that the interviewee has not responded within five seconds of the question, let the silence be. Longer pauses allow time for the interviewee to think of answers. This can potentially lead to more detailed and interesting answers. </p>
                  <p><i>Recommendation 5</i>: if an interviewer feels an answer from the interviewee is insufficient, consider asking them if they want to add more by saying ‘is there something else you want to say about this topic?’ and accept that there is the possibility of no further response. </p>
                  <p>Having made these recommendations, however, we cannot be sure that telling them to an interviewer will make any difference to the way in which they conduct an interview. Much more research is needed into the role of training/experience in increasing sensitivity to the interactional consequences of questioning, and on the degree to which this sensitivity is useful while questioning. Having said this, Richards (2011:99) appears optimistic, suggesting that applied conversation analysis (and ‘other’ approaches to interview analysis) can be used, ’for the purposes of data analysis or improving technique, or both’ and that in ‘developing sensitivity to aspects of one’s talk makes it more likely that shifts of this sort [in, for example, the type of minimal responses used] will be noticed’. As Richards says, there is no ‘case for more detailed prescriptions regarding interview behaviour, but rather the opposite: a reminder that progress depends on the development of craft skills through the sensitive interrogation of one’s own work’ (2011: 107). It is very important to acknowledge this, that the recommendations suggested here are not prescriptions for all interviews but suggestions for how they might be managed. As Richards says, it is through careful reflection on our own interviewing skills that researchers can try to develop their craft; a process of development that is self-generated, not instructed, and which is acutely aware of the benefits and limitations of our choices. </p>
              </div>
            </div>
          </div>
        </section>
        <div class="book__more" @click="readMore($event)">
          <div class="_wrap">
            <span>Read more</span><span>Show less</span><span></span>
          </div>
        </div>
      </div>



      <div class="block -bg">

        <section>
          <div class="cols">
            <div class="col">
              <h1 class="-center">
                <span class="subtitle">Task</span>
                Reflect
              </h1>
            </div>
          </div>
        </section>

        <section>
          <div class="cols">
            <div class="col">
              <div>
                <p>Think about the recommendations that we made as a result of our analysis of the community project data and ask yourself the following questions:</p>
                <ul class="reflects">
                  <li>
                      <div class="_expand" @click="expand($event)">
                        <div class="_title">
                          <span>Do any of the recommendations feel relevant to your experience of interviewing in Part One? If so, which one(s)?</span>
                        </div>
                        <div class="_button"></div>
                      </div>
                      <div class="_form">
                        <textarea name="" id="" cols="30" rows="10" v-model="answers.one.value" @input="checkEmpty($event)"></textarea>
                      </div>
                  </li>

                  <li>
                      <div class="_expand" @click="expand($event)">
                        <div class="_title">
                          <span>What might you do differently when you plan and record your second interview? </span>
                        </div>
                        <div class="_button"></div>
                      </div>
                      <div class="_form">
                        <textarea name="" id="" cols="30" rows="10" v-model="answers.two.value" @input="checkEmpty($event)"></textarea>
                      </div>
                  </li>
                </ul>
                
                <div class="submit-form">
                  <button class="btn" @click="sendEmail()">Email the answers</button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


      <section>
        <div class="cols">
          <div class="col">
            <div>
              <h2 class="-center">What next</h2>
              
              <Tabs/>

            </div>
          </div>
        </div>
      </section>

  </div>
</template>

<script>
import Dictionary from '../Components/Dictionary.vue'
import Transcription from '../Components/Transcription.vue'
import Tabs from '../Components/Tabs.vue'
import { general } from '../mixins/general'
export default {
  components: { Transcription, Dictionary, Tabs },
  name: 'Two',
  mixins: [general],
  data: () => ({
    subject: "Interview | Part 2",
    answers: {
      one: {
        title: 'What went well?',
        value: ''
      },
      two: {
        title: 'What contribution did you make to the interview? ',
        value: ''
      }
    }
  })
}
</script>