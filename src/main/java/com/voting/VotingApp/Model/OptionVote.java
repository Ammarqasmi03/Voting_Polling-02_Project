package com.voting.VotingApp.Model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable

public class OptionVote {
    private String optionText;
    private Long voteCount = 0L;
}
